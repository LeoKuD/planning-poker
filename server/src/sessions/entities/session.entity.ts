import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';
import { IssueEntity } from 'issues/entities/issue.entity';
import { UserEntity } from 'users/entities/user.entity';
import { SettingsEntity } from './settings.entity';

export interface SessionEntity extends InMemoryDBEntity {
  id: string;
  sessionTitle: string;
  inviteLink?: string;
  ownerId?: string;
  userId?: string;
  members?: UserEntity[];
  issues?: IssueEntity[];
  sessionSettings?: SettingsEntity;
}