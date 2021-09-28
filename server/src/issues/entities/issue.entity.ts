import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';
import { IssuePriority } from 'types/common.types';

export interface IssueEntity extends InMemoryDBEntity {
    id: string;
    title: string;
    link?: string;
    priority: IssuePriority;
  }