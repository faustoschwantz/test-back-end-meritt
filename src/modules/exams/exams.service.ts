import { Exam } from './entities/exam.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ExamsService {
  constructor(
    @InjectRepository(Exam)
    private examsRepository: Repository<Exam>,
  ) {}

  create(createExamDto: CreateExamDto): Promise<Exam> {
    const exam = this.examsRepository.create(createExamDto);
    return this.examsRepository.save(exam);
  }

  findAll(): Promise<Exam[]> {
    return this.examsRepository.find();
  }

  findOne(id: string) {
    return this.examsRepository.findOne(id);
  }

  update(id: string, updateExamDto: UpdateExamDto): void {
    this.examsRepository.update(id, updateExamDto);
  }

  remove(id: string): void {
    this.examsRepository.delete(id);
  }
}
