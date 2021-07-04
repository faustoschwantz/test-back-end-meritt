import { ExamTypes } from './../../shared/types/exam.type';

export class CreateExamDto {
  name: string;
  description: string;
  type: ExamTypes;
}
