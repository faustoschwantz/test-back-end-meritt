import { Question } from './../../questions/entities/question.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('exams')
export class Exam {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  description: string;

  @ApiProperty()
  @Column()
  type: string;

  @ApiProperty({ type: () => Question })
  @OneToMany(() => Question, (question) => question.exam)
  questions: Question[];
}
