import { CreateOptionDto } from './../options/dto/create-option.dto';
import {
  ApiTags,
  ApiOkResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger';
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
import { UpdateQuestionDto } from './dto/update-question.dto';
import { OptionsService } from './../options/options.service';
import { Option } from 'src/options/entities/option.entity';

@ApiTags('Questions')
@ApiInternalServerErrorResponse()
@Controller('questions')
export class QuestionsController {
  constructor(
    private readonly questionsService: QuestionsService,
    private readonly optionsService: OptionsService,
  ) {}

  @Get(':id')
  @ApiOkResponse({ type: Question })
  findOne(@Param('id') id: string): Promise<Question> {
    return this.questionsService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ): void {
    this.questionsService.update(id, updateQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    return this.questionsService.remove(id);
  }

  @Post(':questionId/options')
  @ApiOkResponse({ type: Option })
  createOption(
    @Param('questionId') questionId: string,
    @Body() createOptionDto: CreateOptionDto,
  ): Promise<Option> {
    return this.optionsService.create(questionId, createOptionDto);
  }

  @Get(':questionId/options')
  @ApiOkResponse({ type: [Option] })
  findAllOptions(@Param('questionId') questionId: string): Promise<Option[]> {
    return this.optionsService.findAll(questionId);
  }
}
