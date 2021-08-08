import { IsBoolean, IsDate, IsOptional, IsString } from 'class-validator';

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
  @IsBoolean()
  status: boolean;

  @IsOptional()
  @IsString()
  adress: string;

  @IsOptional()
  @IsString()
  commentaries: string;
}
