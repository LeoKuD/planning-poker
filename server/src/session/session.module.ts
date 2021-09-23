import { Module } from '@nestjs/common';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { SessionController } from './session.controller';

@Module({
    imports: [InMemoryDBModule.forFeature('sessions')],
    controllers: [SessionController]
})
export class SessionModule {}