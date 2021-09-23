import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SessionGateway } from 'services/session.gateway';
import { SessionService } from 'session/session.service';
import { CoreModule } from 'core/core.module';
import { SessionModule } from 'session/session.module';
import { UserModule } from './users/user.module';
import { MulterModule } from '@nestjs/platform-express';
import { AvatarModule } from './avatar/avatar.module';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
    UserModule, 
    SessionModule, 
    CoreModule, 
    AvatarModule,
  ],
  controllers: [AppController],
  providers: [
    AppService, 
    SessionGateway, 
    SessionService
  ],
})
export class AppModule {}
