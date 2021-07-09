import { Question } from './entities/question.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Question)
    private questionsRepository: Repository<Question>,
  ) {}

  create(
    examId: string,
    createQuestionDto: CreateQuestionDto,
  ): Promise<Question> {
    const question = this.questionsRepository.create({
      ...createQuestionDto,
      examId,
    });
    return this.questionsRepository.save(question);
  }

  findAll(examId: string): Promise<Question[]> {
    return this.questionsRepository.find({
      where: { examId },
      relations: ['options'],
    });
  }

  findOne(id: string): Promise<Question> {
    return this.questionsRepository.findOne(id);
  }

  update(id: string, updateQuestionDto: UpdateQuestionDto): void {
    this.questionsRepository.update(id, updateQuestionDto);
  }

  remove(id: string): void {
    this.questionsRepository.delete(id);
  }
}
