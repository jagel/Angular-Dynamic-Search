import { TestBed } from '@angular/core/testing';

import { AuthMsalGuard } from './auth-msal-guard.service';

describe('AuthMsalGuardService', () => {
  let service: AuthMsalGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthMsalGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
