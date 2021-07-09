import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateOptionDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  key: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  value: string;

  @IsBoolean()
  @ApiProperty()
  correct: boolean;
}
