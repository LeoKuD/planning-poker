import {
  ConnectedSocket,
  MessageBody, 
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Message } from 'types/common.types';
import { ChatService } from './chat.service';
   
@WebSocketGateway({ cors: true })
export class ChatGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;
   
  constructor(
    private readonly chatService: ChatService
  ) {}

  async handleConnection(socket: Socket) {
    await this.chatService.getUserFromSocket(socket);
  }

  @SubscribeMessage('send_message')
  async listenForMessages(
    @MessageBody() data: Message,
    @ConnectedSocket() socket: Socket,
  ) {
    const author = await this.chatService.getUserFromSocket(socket);
 
    this.server.sockets.emit('receive_message', {
      id: data.id,
      content: data.value,
      author,
    });
  }
}