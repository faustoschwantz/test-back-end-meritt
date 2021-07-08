import { ApiProperty } from '@nestjs/swagger';

export class CreateOptionDto {
  @ApiProperty()
  key: string;

  @ApiProperty()
  value: string;

  @ApiProperty()
  correct: boolean;
}
