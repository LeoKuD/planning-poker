import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from 'chat/chat.gateway';
import { ChatService } from 'chat/chat.service';
import { CoreModule } from 'core/core.module';
import { GameModule } from 'games/game.module';
import { UserModule } from './users/user.module';
import { MulterModule } from '@nestjs/platform-express';
import { AvatarModule } from './avatar/avatar.module';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
    UserModule, 
    GameModule, 
    CoreModule, 
    AvatarModule,
  ],
  controllers: [AppController],
  providers: [
    AppService, 
    ChatGateway, 
    ChatService
  ],
})
export class AppModule {}
