import { Injectable } from '@nestjs/common';
// import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
// import { WsException } from '@nestjs/websockets';
import { SessionEntity } from 'sessions/entities/session.entity';
import { generateId } from 'utils/generate-id.utils';
import { UserEntity } from 'users/entities/user.entity';
import { IssueEntity } from 'issues/entities/issue.entity';
import { IssueDto } from 'issues/dto/issue.dto';
import { SessionDto } from './dto/session.dto';
import { getUniqueListBy } from 'utils/get-unique-by';
 
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

  private getAllKey() {
    return [...this.sessions].map(([key, val]) => {
      console.log(key, val);
    })[0]
  }

  createSession(data: SessionDto): SessionEntity {
    const sessionId = this.getSessionId();
    const session = { 
      ...data, 
      id: sessionId, 
      inviteLink: `/lobby/${sessionId}`,
      members: [],
      issues: []
    }
    this.sessions.set(sessionId, session);
    console.log('sessions->', this.sessions.size);
    this.getAllKey();
    
    return session;
  }

  getSessionById(sessionId: string): SessionEntity {
    return this.sessions.get(sessionId);
  }

  removeSession(sessionId: string): void {
    this.sessions.delete(sessionId);
    console.log('sessions->', this.sessions.size);
  }

  isExistSession(sessionId: string): boolean {
    return this.sessions.has(sessionId);
  }

  connectUser(user: UserEntity, sessionId: string) {
    const session = this.getSessionById(sessionId);
    if (user.isAdmin) {
      session.ownerId = user.id;
    }
    session.members.push(user);
    session.members = getUniqueListBy(session.members, 'id')
    console.log(session);
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