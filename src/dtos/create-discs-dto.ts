import { IsString, Length, IsNumber, IsPositive, IsInt } from 'class-validator';

export class CreateDiscDto {
  @IsString()
  @Length(2, 200)
  title: string;

  @IsString()
  @Length(2, 200)
  artist: string;

  @IsPositive()
  price: number;

  @IsInt()
  @IsPositive()
  stock: number;
}