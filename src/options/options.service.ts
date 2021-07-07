import { Option } from './entities/option.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { Repository } from 'typeorm';

@Injectable()
export class OptionsService {
  constructor(
    @InjectRepository(Option)
    private optionsRepository: Repository<Option>,
  ) {}

  create(
    questionId: string,
    createOptionDto: CreateOptionDto,
  ): Promise<Option> {
    const option = this.optionsRepository.create({
      ...createOptionDto,
      questionId,
    });
    return this.optionsRepository.save(option);
  }

  findAll(questionId: string): Promise<Option[]> {
    return this.optionsRepository.find({ where: { questionId } });
  }

  findOne(id: string, questionId: string): Promise<Option> {
    return this.optionsRepository.findOne({ where: { id, questionId } });
  }

  async update(
    id: string,
    questionId: string,
    updateOptionDto: UpdateOptionDto,
  ): Promise<void> {
    await this.optionsRepository.update({ id, questionId }, updateOptionDto);
    return;
  }

  async remove(id: string, questionId: string): Promise<void> {
    await this.optionsRepository.delete({ id, questionId });
  }
}
