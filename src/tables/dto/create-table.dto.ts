import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
export class CreateTableDto {
  @IsString()
  @MaxLength(255)
  @MinLength(2)
  type: string;

  @IsNumber()
  @MaxLength(1_000_00)
  @MinLength(10)
  width: number;

  @IsNumber()
  @MaxLength(1_000_00)
  @MinLength(10)
  height: number;

  @IsOptional()
  inStock: boolean;
}
