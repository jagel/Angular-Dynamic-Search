import { TestBed } from '@angular/core/testing';

import { EndpointResolutoryService } from './endpoint-resolutory.service';

describe('EndpointResolutoryService', () => {
  let service: EndpointResolutoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndpointResolutoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
