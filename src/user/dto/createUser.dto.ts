import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsOptional()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  secondName: string;

  @IsOptional()
  @IsString()
  patronymic: string;

  @IsNotEmpty()
  @IsDateString()
  birthDate: Date;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  phone: number;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
