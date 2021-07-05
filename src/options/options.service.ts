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

  create(createOptionDto: CreateOptionDto): Promise<Option> {
    const option = this.optionsRepository.create(createOptionDto);
    return this.optionsRepository.save(option);
  }

  findAll(): Promise<Option[]> {
    return this.optionsRepository.find();
  }

  findOne(id: number): Promise<Option> {
    return this.optionsRepository.findOne(id);
  }

  async update(id: number, updateOptionDto: UpdateOptionDto): Promise<number> {
    const option = await this.optionsRepository.update(id, updateOptionDto);
    return option.affected;
  }

  async remove(id: number): Promise<number> {
    const option = await this.optionsRepository.delete(id);
    return option.affected;
  }
}
