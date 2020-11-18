import { Test, TestingModule } from '@nestjs/testing';
import { NormativeBaseCategorysController } from './normative-base-categorys.controller';

describe('NormativeBaseCategorysController', () => {
  let controller: NormativeBaseCategorysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NormativeBaseCategorysController],
    }).compile();

    controller = module.get<NormativeBaseCategorysController>(NormativeBaseCategorysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
