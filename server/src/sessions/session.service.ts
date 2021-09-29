import { Injectable } from '@nestjs/common';
// import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
// import { WsException } from '@nestjs/websockets';
import { SessionEntity } from 'sessions/entities/session.entity';
import { generateId } from 'utils/generate-id.utils';
import { UserEntity } from 'users/entities/user.entity';
import { IssueEntity } from 'issues/entities/issue.entity';
import { IssueDto } from 'issues/dto/issue.dto';
 
@Injectable()
export class SessionService {
  private sessions: Map<string, SessionEntity> = new Map();

  private getSessionId(): string {
    const sessionId = generateId();

    if (this.sessions.has(sessionId)) {
      return this.getSessionId();
    }

    return sessionId;
  }

  createSession(data): SessionEntity {
    const sessionId = this.getSessionId();

    const session = { ...data, id: sessionId, inviteLink: `/lobby/${sessionId}` }

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
    if (user.isAdmin) {
      session.sessionDealerId = user.id;
    }
  }

  createIssue(issue: IssueEntity, sessionId: string): IssueEntity {
    const session = this.getSessionById(sessionId);
    session.issues.push(issue);
    return issue;
  }

  getAllIssue(sessionId: string): IssueEntity[] {
    const session = this.getSessionById(sessionId);
    const { issues } =  session;
    return issues;
  }

  getIssueById(issueId: string, sessionId: string): IssueEntity {
    const session = this.getSessionById(sessionId);
    const issue =  session.issues.find(item => item.id === issueId);
    return issue;
  }

  updateIssue(issueId: string, issueDto: IssueDto, sessionId: string): void {
    const session = this.getSessionById(sessionId);
    const oldIssue = this.getIssueById(issueId, sessionId);
    if (oldIssue) {
      session.issues[session.issues.indexOf(oldIssue)] = { id: issueId, ...issueDto };
    }
  }

  removeIssue(issueId: string, sessionId: string): IssueEntity[] {
    let { issues } = this.getSessionById(sessionId);
    const deletedIssue = this.getIssueById(issueId, sessionId);
    const index = issues.indexOf(deletedIssue);
    issues = [
      ...issues.slice(0, index),
      ...(issues.length > index + 1
        ? issues.slice(index + 1)
        : [])
    ];
    return issues;
  }
}