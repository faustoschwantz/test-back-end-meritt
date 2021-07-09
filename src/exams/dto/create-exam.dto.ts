import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ExamType } from './../../shared/enums/exam-type';
import { ApiProperty } from '@nestjs/swagger';
import { ExamTypes } from './../../shared/types/exam';

export class CreateExamDto {
  @ApiProperty({ example: 'Prova AMARELA', description: 'O nome da prova' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Prova completa',
    description: 'A descrição da prova',
  })
  description: string;

  @IsEnum(ExamType)
  @ApiProperty({
    enum: ExamType,
    description: 'O tipo da prova: ONLINE ou OFFLINE',
  })
  type: ExamTypes;
}
