import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class UserDto {
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  firstName: string;

  @IsString()
  lastName?: string;

  @IsString()
  position?: string;

  @IsString()
  avatar?: string;

  isAdmin: boolean;
  
  isObserver: boolean;
}