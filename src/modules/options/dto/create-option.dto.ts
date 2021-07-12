import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateOptionDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'a' })
  key: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'viver' })
  value: string;

  @IsBoolean()
  @ApiProperty({ example: true })
  correct: boolean;
}
