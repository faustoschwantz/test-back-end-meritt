import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateQuestionDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Qual o sentido da vida, do universo e tudo mais?',
  })
  statement: string;
}
