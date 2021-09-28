import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SessionGateway } from 'socket/session.gateway';
import { CoreModule } from 'core/core.module';
import { SessionModule } from 'sessions/session.module';
import { UserModule } from './users/user.module';
import { MulterModule } from '@nestjs/platform-express';
import { AvatarModule } from './avatar/avatar.module';
import { IssuesModule } from 'issues/issues.module';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
    UserModule, 
    SessionModule, 
    CoreModule, 
    AvatarModule,
    IssuesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService, 
    SessionGateway
  ],
})
export class AppModule {}
