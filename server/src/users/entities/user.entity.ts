import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';
import { TypePosition } from 'types/common.types';

export interface UserEntity extends InMemoryDBEntity {
    id: string | undefined;
    name: string;
    surname?: string;
    position: TypePosition;
    avatarUrl?: string;
}