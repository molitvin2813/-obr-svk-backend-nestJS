import { Test, TestingModule } from '@nestjs/testing';
import { ArticleCategorysController } from './article-categorys.controller';

describe('ArticleCategorysController', () => {
  let controller: ArticleCategorysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleCategorysController],
    }).compile();

    controller = module.get<ArticleCategorysController>(ArticleCategorysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
