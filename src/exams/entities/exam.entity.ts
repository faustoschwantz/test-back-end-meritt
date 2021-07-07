import { Question } from './../../questions/entities/question.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('exams')
export class Exam {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  type: string;

  @OneToMany(() => Question, (question) => question.exam)
  questions: Question[];
}
