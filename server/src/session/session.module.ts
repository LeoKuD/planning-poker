import { Module } from '@nestjs/common';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { SessionController } from './session.controller';
import { SessionService } from './session.service';

@Module({
    imports: [InMemoryDBModule.forFeature('sessions')],
    controllers: [SessionController],
    providers: [SessionService],
    exports: [SessionService],
})
export class SessionModule {}