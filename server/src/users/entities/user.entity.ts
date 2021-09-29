import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface UserEntity extends InMemoryDBEntity {
    id: string | undefined;
    firstName: string;
    lastName?: string;
    position?: string;
    avatar?: string;
    isAdmin: boolean;
    isObserver: boolean;
}