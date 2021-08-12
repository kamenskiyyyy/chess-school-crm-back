import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreatePassDto {
  @IsNotEmpty()
  @IsDate()
  saleDate: Date;

  @IsNotEmpty()
  @IsNumber()
  paidAmount: number;

  @IsNotEmpty()
  @IsString()
  passType: string;

  @IsDate()
  @IsNotEmpty()
  startDate: Date;

  @IsDate()
  @IsNotEmpty()
  endData: Date;

  @IsString()
  @IsNotEmpty()
  office: string;

  @IsString()
  @IsOptional()
  receiver: string;

  @IsString()
  @IsOptional()
  method: string;

  @IsString()
  @IsOptional()
  comment: string;
}
