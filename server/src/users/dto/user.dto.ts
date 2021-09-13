import { IsString, IsNotEmpty, MinLength } from 'class-validator';
import { Role } from 'types/common.types';

export class UserDto {
  @IsString()
  @MinLength(5)
  @IsNotEmpty()
  name: string;

  @IsString()
  surname?: string;

  @IsNotEmpty()
  position: Role.player | Role.dealer | Role.observer;

  @IsString()
  avatarUrl?: string;
}