import { ExamType } from './../../../shared/enums/exam-type';
import { Question } from './../../questions/entities/question.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('exams')
export class Exam {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: 'Prova AMARELA' })
  @Column()
  name: string;

  @ApiProperty({ example: 'Prova completa' })
  @ApiProperty()
  @Column()
  description: string;

  @ApiProperty({ enum: ExamType, example: ExamType.OFFLINE })
  @Column()
  type: string;

  @ApiProperty({ type: () => Question })
  @OneToMany(() => Question, (question) => question.exam)
  questions?: Question[];
}
