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
import { UserEntity } from './entities/user.entity';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UserController extends InMemoryDBEntityAsyncController<UserEntity> {
    constructor(private userService: InMemoryDBService<UserEntity>) {
        super(userService);
    }
    @Post()
    createUser(@Body() userDto: UserDto) {
      return this.userService.create(userDto);
    }
  
    @Get()
    getAllUsers() {
      return this.userService.getAll();
    }
  
    @Get(':id')
    getUserById(@Param('id') id: string) {
      return this.userService.query(data => data.id === id);
    }
  
    @Put(':id')
    updateUser(@Param('id') id: string, @Body() userDto: UserDto) {
      return this.userService.update({id, ...userDto});
    }
  
    @Delete(':id')
    deleteUser(@Param('id') id: string) {
      return this.userService.delete(id);
    }
  }