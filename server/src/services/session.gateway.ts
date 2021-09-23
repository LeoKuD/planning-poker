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
import { SessionService } from '../session/session.service';
import { UserService } from 'users/user.service';
import { UserEntity } from 'users/entities/user.entity';
   
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
    @MessageBody() user: Partial<UserEntity>,
    @ConnectedSocket() client: Socket,
  ) {
    const userId = client.id;

    const session = this.sessionService.createSession();
    const dealer = this.userService.createUser(
      user,
      userId,
      session.id,
      true,
    );

    this.sessionService.connectUser(dealer, session.id);

    client.join(session.id);

    this.server.to(userId).emit('session:created', session);
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