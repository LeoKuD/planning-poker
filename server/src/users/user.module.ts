import { Module } from '@nestjs/common';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { UserController } from './user.controller';

@Module({
    imports: [InMemoryDBModule.forFeature('user')],
    controllers: [UserController]
})
export class UserModule {}