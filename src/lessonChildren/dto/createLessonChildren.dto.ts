import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateLessonChildrenDto {
  @IsOptional()
  @IsBoolean()
  visited: boolean;

  @IsOptional()
  @IsString()
  coachComment: string;
}
