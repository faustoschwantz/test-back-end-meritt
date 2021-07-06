import { Question } from './../../questions/entities/question.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('options')
export class Option {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  key: string;

  @Column()
  value: string;

  @Column()
  correct: boolean;

  @Column()
  questionId: string;

  @ManyToOne(() => Question, (question) => question.options)
  question: Question;
}
