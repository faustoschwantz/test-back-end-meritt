import { Option } from './entities/option.entity';
import { Module } from '@nestjs/common';
import { OptionsService } from './options.service';
import { OptionsController } from './options.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Option])],
  controllers: [OptionsController],
  providers: [OptionsService],
})
export class OptionsModule {}
