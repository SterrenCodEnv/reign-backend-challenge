import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FilterNewsDTO {
  @ApiProperty({
    description: 'The title of the news',
    type: String,
    required: false,
  })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty({
    description: 'The description of the news',
    type: String,
    required: false,
  })
  @IsString()
  @IsOptional()
  author?: string;

  @ApiProperty({
    description: 'The description of the news',
    type: String,
    isArray: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  tags?: string[];
}
