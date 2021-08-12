import { IsDate, IsOptional, IsString } from 'class-validator';

export class CreateChildrenDto {
  @IsOptional()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  secondName: string;

  @IsOptional()
  @IsString()
  patronymic: string;

  @IsOptional()
  @IsDate()
  birthDate: Date;

  @IsOptional()
  @IsString()
  status: string;

  @IsOptional()
  @IsString()
  adress: string;

  @IsOptional()
  @IsString()
  commentaries: string;
}
