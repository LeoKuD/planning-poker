import { Injectable } from '@nestjs/common';
import { UserEntity } from 'users/entities/user.entity';

@Injectable()
export class UserService {
  private usersMap: Map<string, string> = new Map();

  createUser(
    userData: Partial<UserEntity>, 
    userId: string, 
    sessionId: string
  ): UserEntity {
    const user = {
      ...userData,
      id: userId,
    } as UserEntity;
    this.usersMap.set(user.id, sessionId); 
    // console.log('users in userM->', this.usersMap.size);
    return user;
  }

  removeAllUsesOfSession(sessionId: string) {
    [...this.usersMap].map(([key, val]) => {
      if (val === sessionId) {
        this.usersMap.delete(key);
      }
    })[0]
  }

  getSessionIdByUserId(userId: string) {
    return this.usersMap.get(userId)
  }
}
