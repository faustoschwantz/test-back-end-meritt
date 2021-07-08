import { ApiTags } from '@nestjs/swagger';
import { sortRandomArray } from './../shared/utils/array';
import { Question } from './entities/question.entity';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@ApiTags('Exams/Questions')
@Controller('exams/:examId/questions/')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  create(
    @Param('examId') examId: string,
    @Body() createQuestionDto: CreateQuestionDto,
  ): Promise<Question> {
    return this.questionsService.create(examId, createQuestionDto);
  }

  @Get()
  async findAll(@Param('examId') examId: string): Promise<Question[]> {
    const questions = await this.questionsService.findAll(examId);

    const questionsRandomOptions = questions.map((question) => {
      const randomOptions = sortRandomArray(question.options);
      return { ...question, options: randomOptions };
    });

    return questionsRandomOptions;
  }

  @Get(':id')
  findOne(
    @Param('examId') examId: string,
    @Param('id') id: string,
  ): Promise<Question> {
    return this.questionsService.findOne(examId, id);
  }

  @Put(':id')
  update(
    @Param('examId') examId: string,
    @Param('id') id: string,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ): void {
    this.questionsService.update(examId, id, updateQuestionDto);
  }

  @Delete(':id')
  remove(@Param('examId') examId: string, @Param('id') id: string): void {
    return this.questionsService.remove(examId, id);
  }
}
