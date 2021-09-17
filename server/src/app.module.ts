import { Module } from '@nestjs/common';
import { ChatGateway } from 'chat/chat.gateway';
import { ChatService } from 'chat/chat.service';
import { CoreModule } from 'core/core.module';
import { GameModule } from 'games/game.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';

@Module({
  imports: [UserModule, GameModule, CoreModule],
  controllers: [AppController],
  providers: [AppService, ChatGateway, ChatService],
})
export class AppModule {}
