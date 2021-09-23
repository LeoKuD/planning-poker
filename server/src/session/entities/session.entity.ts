import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';
import { UserEntity } from 'users/entities/user.entity';

export interface SessionEntity extends InMemoryDBEntity {
    id: string;
    sessionTitle: string;
    inviteLink: string;
    sessionDealerId: string;
    members?: UserEntity[];
}