import { Test, TestingModule } from '@nestjs/testing';
import { NormativeBaseService } from './normative-base.service';

describe('NormativeBaseService', () => {
  let service: NormativeBaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NormativeBaseService],
    }).compile();

    service = module.get<NormativeBaseService>(NormativeBaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
