import { Test, TestingModule } from '@nestjs/testing';
import { NormativeBaseController } from './normative-base.controller';

describe('NormativeBaseController', () => {
  let controller: NormativeBaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NormativeBaseController],
    }).compile();

    controller = module.get<NormativeBaseController>(NormativeBaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
