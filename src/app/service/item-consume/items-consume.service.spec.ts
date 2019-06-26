import { TestBed } from '@angular/core/testing';

import { ItemsConsumeService } from './items-consume.service';

describe('ItemsConsumeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemsConsumeService = TestBed.get(ItemsConsumeService);
    expect(service).toBeTruthy();
  });
});
