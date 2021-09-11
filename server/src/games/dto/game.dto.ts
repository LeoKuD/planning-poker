import { IsString, IsNotEmpty, MinLength } from 'class-validator';
import { UserEntity } from 'users/entities/user.entity';

export class GameDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  inviteLink: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  descriptions: string;

  members: UserEntity[];
  
  @IsString()
  settings: string;

  @IsString()
  result: string;
}