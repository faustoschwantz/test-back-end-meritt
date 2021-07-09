import { QuestionsService } from './../questions/questions.service';
import { Question } from './../questions/entities/question.entity';
import { Exam } from './entities/exam.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ExamsService } from './exams.service';
import { ExamsController } from './exams.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Exam, Question])],
  controllers: [ExamsController],
  providers: [ExamsService, QuestionsService],
})
export class ExamsModule {}
