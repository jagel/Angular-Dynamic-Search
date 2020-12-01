import { TestBed } from '@angular/core/testing';

import { BucketFormService } from './bucket-form.service';

describe('BucketFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BucketFormService = TestBed.get(BucketFormService);
    expect(service).toBeTruthy();
  });
});
