import { IsString, IsNotEmpty } from 'class-validator';
import { UserEntity } from 'users/entities/user.entity';

export class SessionDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  inviteLink: string;

  @IsString()
  @IsNotEmpty()
  sessionTitle: string;

  @IsString()
  @IsNotEmpty()
  sessionDealerId: string;

  members?: UserEntity[];
}