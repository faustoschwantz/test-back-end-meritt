import { Exam } from 'src/exams/entities/exam.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('questions')
export class Question {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  statement: string;

  @Column()
  examId: string;

  @ManyToOne(() => Exam, (exam) => exam.questions)
  exam: Exam;
}
