import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RegistrationService } from './registration.service';

describe('RegistrationService', () => {
  let service: RegistrationService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistrationService],
      imports: [HttpClientTestingModule]
    });

    service = TestBed.get(RegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
