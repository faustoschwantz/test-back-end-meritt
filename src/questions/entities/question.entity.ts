import { ApiProperty } from '@nestjs/swagger';
import { Option } from './../../options/entities/option.entity';
import { Exam } from './../../exams/entities/exam.entity';
import { ManyToOne, OneToMany } from 'typeorm';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('questions')
export class Question {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id: string;

  @Column()
  @ApiProperty()
  statement: string;

  @Column()
  examId: string;

  @ManyToOne(() => Exam, (exam) => exam.questions)
  exam: Exam;

  @ApiProperty({ type: [Option] })
  @OneToMany(() => Option, (option) => option.question)
  options: Option[];
}
