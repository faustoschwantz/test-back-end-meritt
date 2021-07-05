import { ExamTypes } from 'src/shared/types/exam';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('exams')
export class Exam {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('')
  name: string;

  @Column('')
  description: string;

  @Column('')
  type: ExamTypes;
}
