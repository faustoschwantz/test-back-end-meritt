import { Option } from './../../options/entities/option.entity';
import { Exam } from './../../exams/entities/exam.entity';
import { ManyToOne, OneToMany } from 'typeorm';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @OneToMany(() => Option, (option) => option.question)
  options: Option[];
}
