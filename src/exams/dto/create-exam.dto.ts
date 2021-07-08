import { ApiProperty } from '@nestjs/swagger';
import { ExamTypes } from './../../shared/types/exam';

export class CreateExamDto {
  @ApiProperty({ example: 'Prova AMARELA', description: 'O nome da prova' })
  name: string;

  @ApiProperty({
    example: 'Prova completa',
    description: 'A descrição da prova',
  })
  description: string;

  @ApiProperty({
    example: 'ONLINE',
    description: 'O tipo da prova: ONLINE ou OFFLINE',
  })
  type: ExamTypes;
}
