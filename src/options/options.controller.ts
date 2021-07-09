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
import { UpdateOptionDto } from './dto/update-option.dto';

@ApiTags('Options')
@ApiInternalServerErrorResponse()
@Controller('options')
export class OptionsController {
  constructor(private readonly optionsService: OptionsService) {}

  @Get(':id')
  @ApiOkResponse({ type: Option })
  findOne(@Param('id') id: string): Promise<Option> {
    return this.optionsService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateOptionDto: UpdateOptionDto,
  ): Promise<void> {
    return this.optionsService.update(id, updateOptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.optionsService.remove(id);
  }
}
