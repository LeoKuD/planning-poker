import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';
import { TypePosition } from 'types/common.types';

export interface UserEntity extends InMemoryDBEntity {
    id: string | undefined;
    firstName: string;
    lastName?: string;
    role: TypePosition;
    position?: string;
    avatar?: string;
}