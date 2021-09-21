import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';
import { UserEntity } from 'users/entities/user.entity';

export interface SessionEntity extends InMemoryDBEntity {
    id: string;
    inviteLink: string;
    title: string;
    descriptions?: string;
    members?: UserEntity[];
    settings?: string;
    result?: string;
}