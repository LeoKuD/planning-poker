import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
  } from '@nestjs/common';
import { InMemoryDBService, InMemoryDBEntityAsyncController } from '@nestjs-addons/in-memory-db';
import { SessionEntity } from './entities/session.entity';
import { SessionDto } from './dto/session.dto';

@Controller('sessions')
export class GameController extends InMemoryDBEntityAsyncController<SessionEntity> {
    constructor(private gameService: InMemoryDBService<SessionEntity>) {
        super(gameService);
    }
    @Post()
    createSession(@Body() sessionData: SessionDto) {
      return this.gameService.create(sessionData);
    }
  
    @Get()
    getAllSessions() {
      return this.gameService.getAll();
    }
  
    @Get(':id')
    getSessionById(@Param('id') id: string) {
      return this.gameService.query(data => data.id === id);
    }
  
    @Put(':id')
    updateSession(@Param('id') id: string, @Body() sessionData: SessionDto) {
      return this.gameService.update({id, ...sessionData});
    }
  
    @Delete(':id')
    deleteSession(@Param('id') id: string) {
      return this.gameService.delete(id);
    }
  }