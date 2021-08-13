import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateLessonDto {
  @IsNotEmpty()
  @IsDateString()
  lessonTime: Date;

  @IsNotEmpty()
  @IsString()
  lessonLocation: string;
}
