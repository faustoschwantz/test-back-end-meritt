import { CreateExamDto } from './../../modules/exams/dto/create-exam.dto';
import { Exam } from './../../modules/exams/entities/exam.entity';

export const examListMock: Exam[] = [
  {
    id: '1',
    name: 'Prova AMARELA',
    description: 'Prova completa',
    type: 'ONLINE',
  },
  {
    id: '2',
    name: 'Prova Azul',
    description: 'Prova completa',
    type: 'OFFLINE',
  },
  {
    id: '3',
    name: 'Prova Vermelha',
    description: 'Prova completa',
    type: 'ONLINE',
  },
];

export const createExamDtoMock: CreateExamDto = {
  name: 'Prova AMARELA',
  description: 'Prova completa',
  type: 'ONLINE',
};
