import {
  ConnectedSocket,
  MessageBody, 
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import {
  Logger,
} from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { Message } from 'types/common.types';
import { SessionService } from 'sessions/session.service';
import { UserService } from 'users/user.service';
import { UserEntity } from 'users/entities/user.entity';
import { SessionEntity } from 'sessions/entities/session.entity';
import { IssueEntity } from 'issues/entities/issue.entity';
import { IssueDto } from 'issues/dto/issue.dto';
import { SessionDto } from 'sessions/dto/session.dto';
   
@WebSocketGateway({ cors: true })
export class SessionGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;
   
  constructor(
    private readonly sessionService: SessionService,
    private readonly userService: UserService
  ) {}
  
  private logger: Logger = new Logger('SocketGateway');

  afterInit(server: Server) {
    this.logger.log('Init');
  }
  
  async handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }
  
  async handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('session:create')
  async onSessionCreation(
    @MessageBody() data: Partial<SessionDto>,
    @ConnectedSocket() client: Socket,
  ) {
    const userId = client.id;
    const session = this.sessionService.createSession({ ...data } as SessionDto);
    this.logger.log('session:create', session.id);
    client.join(session.id);
    this.server.to(userId).emit('session:create', session);
  }

  @SubscribeMessage('session:validate')
  async onSessionValidate(
    @MessageBody() sessionId: string,
    @ConnectedSocket() client: Socket,
  ) {
    const userId = client.id;
    const response = this.sessionService.isExistSession(sessionId);
    const session = response 
      ? this.sessionService.getSessionById(sessionId)
      : {} as SessionEntity;
    this.logger.log('session:validate', sessionId, response);
    this.server.to(userId).emit('session:validate', { response, session });
  }

  @SubscribeMessage('session:connect')
  async onSessionConnect(
    @MessageBody() data: { sessionId: string; user: Partial<UserEntity> },
    @ConnectedSocket() client: Socket,
  ) {
    const userId = client.id;
    const { user, sessionId } = data;
    this.logger.log('session:connect', sessionId, userId);
    const newUser = this.userService.createUser(user, userId, sessionId);
    this.sessionService.connectUser(newUser, sessionId);
    client.join(sessionId);
    const session = this.sessionService.getSessionById(sessionId);
    this.server.to(userId).emit('session:connect', {session, userId});
    // client.broadcast.to(sessionId).emit('session:user:add', newUser.firstName);
  }

  @SubscribeMessage('session:exit')
  async onSessionRemove(
    @MessageBody() sessionId: string,
    @ConnectedSocket() client: Socket,
  ) {
    const userId = client.id;
    const session = this.sessionService.removeSession(sessionId);
    this.userService.removeAllUsesOfSession(sessionId);
    this.logger.log('session:exit', sessionId);
    this.server.to(userId).emit('session:exit', session);
  }

  @SubscribeMessage('session:user:add')
  async onSessionUserCreate(
    @MessageBody() data: { sessionId: string; user: UserEntity },
    @ConnectedSocket() client: Socket,
  ) {
    const userId = client.id;
    const { user, sessionId } = data;
    const newUser = this.userService.createUser(user, userId, sessionId);
    this.sessionService.connectUser(newUser, sessionId);
    // this.server.to(userId).emit('session:user:add', newUser);
  }

  @SubscribeMessage('session:issue:getAll')
  async onSessionIssueGetAll(
    @MessageBody() sessionId: string,
    @ConnectedSocket() client: Socket,
  ) {
    const userId = client.id;
    const issues = this.sessionService.getAllIssue(sessionId);
    this.server.to(userId).emit('session:issue:getAll', issues);
  }

  @SubscribeMessage('session:issue:add')
  async onSessionIssueAdd(
    @MessageBody() data: { sessionId: string; issue: IssueEntity },
    @ConnectedSocket() client: Socket,
  ) {
    const userId = client.id;
    const { issue, sessionId } = data;
    const newIssue = this.sessionService.createIssue(issue,  sessionId);
    this.server.to(userId).emit('session:issue:add', newIssue);
  }

  @SubscribeMessage('session:issue:update')
  async onSessionIssueUpdate(
    @MessageBody() data: { issueId: string; issueData: IssueDto, sessionId: string; },
    @ConnectedSocket() client: Socket,
  ) {
    const userId = client.id;
    const { issueId, issueData, sessionId } = data;
    const updateIssue = this.sessionService.updateIssue(issueId, issueData, sessionId);
    this.server.to(userId).emit('session:issue:update', updateIssue);
  }

  @SubscribeMessage('session:issue:remove')
  async onSessionIssueRemove(
    @MessageBody() data: { issueId: string; sessionId: string; },
    @ConnectedSocket() client: Socket,
  ) {
    const userId = client.id;
    const { issueId, sessionId } = data;
    const issues = this.sessionService.removeIssue(issueId, sessionId);
    this.server.to(userId).emit('session:issue:update', issues);
  }

  @SubscribeMessage('send_message')
  async listenForMessages(
    @MessageBody() data: Message,
    @ConnectedSocket() socket: Socket,
  ) {
    this.server.sockets.emit('receive_message', {
      id: data.id,
      content: data.value,
      author: '',
    });
  }
}