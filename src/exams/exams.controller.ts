import { sortRandomArray } from './../shared/utils/array';
import { QuestionsService } from './../questions/questions.service';
import { Question } from './../questions/entities/question.entity';
import { Exam } from './entities/exam.entity';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ExamsService } from './exams.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import {
  ApiTags,
  ApiInternalServerErrorResponse,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { CreateQuestionDto } from 'src/questions/dto/create-question.dto';

@ApiTags('Exams')
@ApiInternalServerErrorResponse()
@Controller('exams')
export class ExamsController {
  constructor(
    private readonly examsService: ExamsService,
    private readonly questionsService: QuestionsService,
  ) {}

  @Post()
  @ApiCreatedResponse()
  create(@Body() createExamDto: CreateExamDto) {
    return this.examsService.create(createExamDto);
  }

  @Get()
  @ApiOkResponse({ type: [Exam] })
  async findAll(): Promise<Exam[]> {
    return this.examsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: Exam })
  findOne(@Param('id') id: string): Promise<Exam> {
    return this.examsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateExamDto: UpdateExamDto): void {
    this.examsService.update(id, updateExamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    this.examsService.remove(id);
  }

  @Post(':examId/questions')
  @ApiCreatedResponse({ type: Question })
  createQuestion(
    @Param('examId') examId: string,
    @Body() createQuestionDto: CreateQuestionDto,
  ): Promise<Question> {
    return this.questionsService.create(examId, createQuestionDto);
  }

  @Get(':examId/questions')
  @ApiOkResponse({ type: [Question] })
  async findAllQuestions(@Param('examId') examId: string): Promise<Question[]> {
    const questions = await this.questionsService.findAll(examId);

    const questionsRandomOptions = questions.map((question) => {
      const randomOptions = sortRandomArray(question.options);
      return { ...question, options: randomOptions };
    });

    return questionsRandomOptions;
  }
}
