import { IsString, IsNotEmpty, MinLength } from 'class-validator';
import { IssuePriority } from 'types/common.types';

export class IssueDto {
  @IsString()
  @MinLength(5)
  @IsNotEmpty()
  title: string;

  @IsString()
  link?: string;

  priority: IssuePriority;
}