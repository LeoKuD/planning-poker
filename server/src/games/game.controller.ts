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
import { GameEntity } from './entities/games.entity';
import { GameDto } from './dto/game.dto';

@Controller('games')
export class GameController extends InMemoryDBEntityAsyncController<GameEntity> {
    constructor(private gameService: InMemoryDBService<GameEntity>) {
        super(gameService);
    }
    @Post()
    createGame(@Body() gameDto: GameDto) {
      return this.gameService.create(gameDto);
    }
  
    @Get()
    getAllGames() {
      return this.gameService.getAll();
    }
  
    @Get(':id')
    getGameById(@Param('id') id: string) {
      return this.gameService.query(data => data.id === id);
    }
  
    @Put(':id')
    updateGame(@Param('id') id: string, @Body() gameDto: GameDto) {
      return this.gameService.update({id, ...gameDto});
    }
  
    @Delete(':id')
    deleteGame(@Param('id') id: string) {
      return this.gameService.delete(id);
    }
  }