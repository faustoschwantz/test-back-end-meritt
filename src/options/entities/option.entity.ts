import { Question } from './../../questions/entities/question.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('options')
export class Option {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id: string;

  @ApiProperty()
  @Column()
  key: string;

  @ApiProperty()
  @Column()
  value: string;

  @ApiProperty()
  @Column()
  correct: boolean;

  @Column()
  questionId: string;

  @ManyToOne(() => Question, (question) => question.options)
  question: Question;
}
