import { IsOptional, IsString, Length, IsNumber, IsPositive, IsInt } from 'class-validator';

export class UpdateDiscDto {
  @IsOptional()
  @IsString()
  @Length(1, 100)
  title?: string;

  @IsOptional()
  @IsString()
  @Length(1, 100)
  artist?: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  price?: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  stock?: number;
}
