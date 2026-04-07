import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  Min,
  Max,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateTableDto {
  @ApiProperty({ example: 'wooden' })
  @IsString()
  @MaxLength(255)
  @MinLength(2)
  type: string;

  @ApiProperty({ example: 10 })
  @IsNumber()
  @Min(10)
  @Max(1_000)
  width: number;

  @ApiProperty({ example: 10 })
  @IsNumber()
  @Min(10)
  @Max(1_000)
  height: number;

  @ApiProperty({ example: true })
  @IsOptional()
  inStock: boolean;
}
