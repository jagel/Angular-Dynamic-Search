import { TestBed } from '@angular/core/testing';

import { BuilderFormService } from './builder-form.service';

describe('BuilderFormService', () => {
  let service: BuilderFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuilderFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
