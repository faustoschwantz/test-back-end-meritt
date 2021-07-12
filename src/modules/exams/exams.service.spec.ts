import { Exam } from './entities/exam.entity';
import { createExamDtoMock } from './../../shared/mocks/exams';
import { Test, TestingModule } from '@nestjs/testing';
import { QuestionsService } from '../questions/questions.service';
import { ExamsService } from './exams.service';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ExamsService', () => {
  let examsService: ExamsService;

  const examsRepositoryMock = {
    create: jest.fn(),
    save: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExamsService,
        {
          provide: getRepositoryToken(Exam),
          useValue: examsRepositoryMock,
        },
      ],
    }).compile();

    examsService = module.get<ExamsService>(ExamsService);
  });

  beforeEach(() => {
    examsRepositoryMock.create.mockReset();
    examsRepositoryMock.save.mockReset();
  });

  it('should create a new exam', async () => {
    const returnValue: Exam = { ...createExamDtoMock, id: '1' };

    examsRepositoryMock.save.mockReturnValue(returnValue);
    examsRepositoryMock.create.mockReturnValue(returnValue);

    const savedExam = await examsService.create(createExamDtoMock);

    expect(savedExam).toMatchObject(returnValue);
  });
});
