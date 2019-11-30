import { TestBed } from '@angular/core/testing';

import { LoginFormValidatorService } from './login-form-validator.service';

describe('LoginFormValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginFormValidatorService = TestBed.get(LoginFormValidatorService);
    expect(service).toBeTruthy();
  });
});
