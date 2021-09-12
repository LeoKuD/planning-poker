import { Module } from '@nestjs/common';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { GameController } from './game.controller';

@Module({
    imports: [InMemoryDBModule.forFeature('games')],
    controllers: [GameController]
})
export class GameModule {}