import { OptionsService } from './../options/options.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './entities/question.entity';
import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { Option } from './../options/entities/option.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Question, Option])],
  controllers: [QuestionsController],
  providers: [QuestionsService, OptionsService],
})
export class QuestionsModule {}
