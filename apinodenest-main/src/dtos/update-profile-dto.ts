import { IsOptional, IsString, Length, IsDateString, IsUrl, MaxLength } from 'class-validator';

export class UpdateProfileDto {
  // NÃO exponha id, userId, createdAt, updatedAt aqui
  @IsOptional()
  @IsString()
  @Length(2, 120)
  fullName?: string;

  @IsOptional()
  @IsDateString()
  birthDate?: string;

  @IsOptional()
  @IsUrl({ require_tld: false })
  @MaxLength(500)
  avatarUrl?: string;
}