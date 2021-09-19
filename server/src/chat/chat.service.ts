import { Injectable } from '@nestjs/common';
// import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Socket } from 'socket.io';
import { WsException } from '@nestjs/websockets';
import { UserEntity } from 'users/entities/user.entity';
 
@Injectable()
export class ChatService {
  // constructor(
  //   private readonly userService: InMemoryDBService<UserEntity>,
  // ) {}
 
  async getUserFromSocket(socket: Socket) {
    console.log('id',socket.id);
    console.log('listenersAny', socket.request);
    const user = 'Anonimus';
    // const user = this.userService.query(data => data.id === userId);
    if (!user) {
      throw new WsException('Invalid credentials');
    }
    return user;
  }
}