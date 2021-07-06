import { ExamTypes } from './../../shared/types/exam';

export class CreateExamDto {
  name: string;
  description: string;
  type: ExamTypes;
}
