import { Injectable } from '@nestjs/common';
import { IssueEntity } from 'issues/entities/issue.entity';
import { SessionService } from 'sessions/session.service';
import { IssueDto } from './dto/issue.dto';

@Injectable()
export class IssueService {
  constructor(
    private readonly sessionService: SessionService,
  ) {}
  private issue: Map<string, string> = new Map();

  createIssue(issue: IssueEntity, sessionId: string): IssueEntity {
    const session = this.sessionService.getSessionById(sessionId);
    session.issues.push(issue);
    this.issue.set(issue.id, sessionId);
    return issue;
  }

  getIssueById(issueId: string, sessionId: string): IssueEntity {
    const session = this.sessionService.getSessionById(sessionId);
    const issue =  session.issues.find(item => item.id === issueId);
    return issue;
  }

  updateIssue(issueId: string, issueDto: IssueDto, sessionId: string): void {
    const session = this.sessionService.getSessionById(sessionId);
    const oldIssue = this.getIssueById(issueId, sessionId);
    if (oldIssue) {
      session.issues[session.issues.indexOf(oldIssue)] = { id: issueId, ...issueDto };
    }
  }

  removeIssue(issueId: string, sessionId: string): IssueEntity[] {
    let { issues } = this.sessionService.getSessionById(sessionId);
    const deletedIssue = this.getIssueById(issueId, sessionId);
    const index = issues.indexOf(deletedIssue);
    issues = [
      ...issues.slice(0, index),
      ...(issues.length > index + 1
        ? issues.slice(index + 1)
        : [])
    ];
    this.issue.delete(issueId);
    return issues;
  }
}
