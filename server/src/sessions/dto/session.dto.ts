import { IsString, IsNotEmpty } from 'class-validator';
import { IssueEntity } from 'issues/entities/issue.entity';
import { UserEntity } from 'users/entities/user.entity';

export class SessionDto {
  @IsString()
  @IsNotEmpty()
  inviteLink?: string;

  @IsString()
  @IsNotEmpty()
  sessionTitle: string;

  @IsString()
  @IsNotEmpty()
  ownerId?: string;
  
  @IsString()
  @IsNotEmpty()
  userId: string;

  members?: UserEntity[];

  issues?: IssueEntity[];
}
