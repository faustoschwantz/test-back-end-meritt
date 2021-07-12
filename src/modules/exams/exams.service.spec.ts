import { Exam } from './entities/exam.entity';
import { createExamDtoMock, examListMock } from './../../shared/mocks/exams';
import { Test, TestingModule } from '@nestjs/testing';
import { ExamsService } from './exams.service';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ExamsService', () => {
  let examsService: ExamsService;

  const examsRepositoryMock = {
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
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
    examsRepositoryMock.find.mockReset();
    examsRepositoryMock.findOne.mockReset();
  });

  it('should create a new exam', async () => {
    const returnValue: Exam = { ...createExamDtoMock, id: '1' };

    examsRepositoryMock.save.mockReturnValue(returnValue);
    examsRepositoryMock.create.mockReturnValue(returnValue);

    const savedExam = await examsService.create(createExamDtoMock);

    expect(savedExam).toMatchObject(returnValue);
  });

  it('should list all exams', async () => {
    examsRepositoryMock.find.mockReturnValue(examListMock);

    const exams = await examsService.findAll();

    expect(exams).toHaveLength(3);
  });

  it('should find a exam', async () => {
    const returnValue = examListMock[0];
    examsRepositoryMock.findOne.mockReturnValue(returnValue);

    const exam = await examsService.findOne(returnValue.id);

    expect(exam).toMatchObject(returnValue);
  });
});
