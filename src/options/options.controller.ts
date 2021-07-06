import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { OptionsService } from './options.service';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';

@Controller('questions/:questionId/options')
export class OptionsController {
  constructor(private readonly optionsService: OptionsService) {}

  @Post()
  create(
    @Param('questionId') questionId: string,
    @Body() createOptionDto: CreateOptionDto,
  ) {
    return this.optionsService.create({ ...createOptionDto, questionId });
  }

  @Get()
  async findAll(@Param('questionId') questionId: string) {
    const options = await this.optionsService.findAll(questionId);

    if (options.length === 0) throw new NotFoundException();

    return options;
  }

  @Get(':id')
  async findOne(
    @Param('questionId') questionId: string,
    @Param('id') id: string,
  ) {
    const option = await this.optionsService.findOne(id, questionId);

    if (option === undefined) throw new NotFoundException();

    return option;
  }

  @Patch(':id')
  update(
    @Param('questionId') questionId: string,
    @Param('id') id: string,
    @Body() updateOptionDto: UpdateOptionDto,
  ) {
    return this.optionsService.update(id, { ...updateOptionDto, questionId });
  }

  @Delete(':id')
  remove(@Param('questionId') questionId: string, @Param('id') id: string) {
    return this.optionsService.remove(id, questionId);
  }
}
