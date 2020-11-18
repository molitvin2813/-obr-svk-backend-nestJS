import { Test, TestingModule } from '@nestjs/testing';
import { ArticleCategorysService } from './article-categorys.service';

describe('ArticleCategorysService', () => {
  let service: ArticleCategorysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticleCategorysService],
    }).compile();

    service = module.get<ArticleCategorysService>(ArticleCategorysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
