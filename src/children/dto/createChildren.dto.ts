import { IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateChildrenDto {
  @IsString()
  firstName: string;

  @IsString()
  secondName: string;

  @IsOptional()
  @IsString()
  patronymic: string;

  @IsOptional()
  @IsDateString()
  birthDate: Date;

  @IsString()
  status: string;

  @IsOptional()
  @IsString()
  adress: string;

  @IsOptional()
  @IsString()
  comment: string;
}
