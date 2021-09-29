import { Injectable } from '@nestjs/common';
import { UserEntity } from 'users/entities/user.entity';

@Injectable()
export class UserService {
  private user: Map<string, string> = new Map();

  createUser(userData, userId, sessionId): UserEntity {
    const user = {
      ...userData,
      id: userId,
    } as UserEntity;
    this.user.set(user.id, sessionId)
    return user;
  }

  getSessionIdByUserId(userId: string) {
    return this.user.get(userId)
  }
}