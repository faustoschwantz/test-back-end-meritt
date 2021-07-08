import {
  ApiTags,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { Option } from './entities/option.entity';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { OptionsService } from './options.service';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';

@ApiTags('Questions/Options')
@ApiInternalServerErrorResponse()
@Controller('questions/:questionId/options')
export class OptionsController {
  constructor(private readonly optionsService: OptionsService) {}

  @Post()
  @ApiOkResponse({ type: Option })
  create(
    @Param('questionId') questionId: string,
    @Body() createOptionDto: CreateOptionDto,
  ): Promise<Option> {
    return this.optionsService.create(questionId, createOptionDto);
  }

  @Get()
  @ApiOkResponse({ type: [Option] })
  findAll(@Param('questionId') questionId: string): Promise<Option[]> {
    return this.optionsService.findAll(questionId);
  }

  @Get(':id')
  @ApiOkResponse({ type: Option })
  findOne(
    @Param('questionId') questionId: string,
    @Param('id') id: string,
  ): Promise<Option> {
    return this.optionsService.findOne(id, questionId);
  }

  @Put(':id')
  update(
    @Param('questionId') questionId: string,
    @Param('id') id: string,
    @Body() updateOptionDto: UpdateOptionDto,
  ): Promise<void> {
    return this.optionsService.update(id, questionId, updateOptionDto);
  }

  @Delete(':id')
  remove(
    @Param('questionId') questionId: string,
    @Param('id') id: string,
  ): Promise<void> {
    return this.optionsService.remove(id, questionId);
  }
}
