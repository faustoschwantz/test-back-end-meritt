import { Question } from './../../questions/entities/question.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

@Entity('options')
export class Option {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id: string;

  @ApiProperty({ example: 'a' })
  @Column()
  key: string;

  @ApiProperty({ example: 'viver' })
  @Column()
  value: string;

  @ApiProperty({ example: true })
  @Column()
  correct: boolean;

  @Exclude()
  @Column()
  questionId: string;

  @ManyToOne(() => Question, (question) => question.options, {
    onDelete: 'CASCADE',
  })
  question: Question;
}
