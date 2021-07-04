import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExamsModule } from './exams/exams.module';
import { QuestionsModule } from './questions/questions.module';
import { OptionsModule } from './options/options.module';

@Module({
  imports: [ExamsModule, QuestionsModule, OptionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
