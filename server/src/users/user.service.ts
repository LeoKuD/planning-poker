import { Injectable } from '@nestjs/common';
import {  UserEntity } from 'users/entities/user.entity';

@Injectable()
export class UserService {
  private user: Map<string, string> = new Map();

  createUser(useId, sessionId, userData, isAdmin = false): UserEntity {
    const user = {
      isAdmin,
      isObserver: false,
      ...userData,
      id: useId,
    } as UserEntity;

    this.user.set(useId, sessionId)

    return user;
  }

  getSessionIdByUserId(userId: string) {
    return this.user.get(userId)
  }
}