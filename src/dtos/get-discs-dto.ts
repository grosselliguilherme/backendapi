import { IsInt, IsString, IsNumber } from 'class-validator';

export class GetDiscDto {
  @IsInt()
  id: number;

  @IsString()
  title: string;

  @IsString()
  artist: string;

  @IsNumber()
  price: number;

  @IsInt()
  stock: number;

  @IsString()
  createdAt: string;
}
