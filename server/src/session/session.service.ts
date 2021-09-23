import { Injectable } from '@nestjs/common';
// import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
// import { WsException } from '@nestjs/websockets';
import { SessionEntity } from 'session/entities/session.entity';
import { generateId } from 'utils/generate-id.utils';
import { UserEntity } from 'users/entities/user.entity';
 
@Injectable()
export class SessionService {
  // constructor(
  //   private readonly sessionService: InMemoryDBService<SessionEntity>,
  // ) {}
 
  private sessions: Map<string, SessionEntity> = new Map();

  private getSessionId(): string {
    const sessionId = generateId();

    if (this.sessions.has(sessionId)) {
      return this.getSessionId();
    }

    return sessionId;
  }

  createSession(): SessionEntity {
    const sessionId = this.getSessionId();

    const session = {
      id: sessionId,
      inviteLink: `URL/lobby/${sessionId}`,
      sessionTitle: '',
      sessionDealerId: null,
      members: [],
    };

    this.sessions.set(sessionId, session);

    return session;
  }

  getSessionById(sessionId: string): SessionEntity {
    return this.sessions.get(sessionId);
  }

  removeSession(sessionId: string): void {
    this.sessions.delete(sessionId);
  }

  isExistSession(sessionId: string): boolean {
    return this.sessions.has(sessionId);
  }

  connectUser(user: UserEntity, sessionId: string) {
    const session = this.getSessionById(sessionId);

    session.members.push(user);
    if (user.id) {
      session.sessionDealerId = user.id;
    }
  }
}