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

@Controller('exams')
export class ExamsController {
  constructor(private readonly examsService: ExamsService) {}

  @Post()
  create(@Body() createExamDto: CreateExamDto) {
    return this.examsService.create(createExamDto);
  }

  @Get()
  async findAll(): Promise<Exam[]> {
    return this.examsService.findAll();
  }

  @Get(':id')
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
}
