import { TestBed } from '@angular/core/testing';

import { DynamicStructureLibService } from './dynamic-structure-lib.service';

describe('DynamicStructureLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicStructureLibService = TestBed.get(DynamicStructureLibService);
    expect(service).toBeTruthy();
  });
});
