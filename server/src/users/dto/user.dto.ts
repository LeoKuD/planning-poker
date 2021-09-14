import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class UserDto {
  @IsString()
  @MinLength(5)
  @IsNotEmpty()
  name: string;

  @IsString()
  surname?: string;

  @IsNotEmpty()
  position: 'plyaer' | 'dealer' | 'observer';

  @IsString()
  avatarUrl?: string;
}