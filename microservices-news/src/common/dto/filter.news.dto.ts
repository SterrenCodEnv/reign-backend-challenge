import { IsObject, IsOptional, IsString } from 'class-validator';
import { Prisma } from '@prisma/client';

export class FilterNewsDataDto {
  @IsObject()
  @IsOptional()
  data?: IFilterNewsDTO;
}

export interface IFilterNewsDTO {
  title?: string;
  author?: string;
  tags?: string[];
}

export class FilterNewsDTO {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  author?: string;

  @IsString()
  @IsOptional()
  tags?: string[];
}
