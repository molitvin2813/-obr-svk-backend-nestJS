import { Test, TestingModule } from '@nestjs/testing';
import { NormativeBaseCategorysService } from './normative-base-categorys.service';

describe('NormativeBaseCategorysService', () => {
  let service: NormativeBaseCategorysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NormativeBaseCategorysService],
    }).compile();

    service = module.get<NormativeBaseCategorysService>(NormativeBaseCategorysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
