import { IsString, IsNotEmpty, MinLength } from 'class-validator';
import { TypePosition } from 'types/common.types';

export class UserDto {
  @IsString()
  @MinLength(5)
  @IsNotEmpty()
  firstName: string;

  @IsString()
  lastName?: string;

  @IsNotEmpty()
  role: TypePosition;

  @IsString()
  position?: string;

  @IsString()
  avatar?: string;
}