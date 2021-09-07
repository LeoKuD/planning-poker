import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface UserEntity extends InMemoryDBEntity {
    id: string | undefined;
    name: string;
    surname?: string;
    position: 'plyaer' | 'dealer' | 'observer';
    avatarUrl?: string;
}