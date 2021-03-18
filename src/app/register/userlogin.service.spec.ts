import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UserloginService } from './userlogin.service';

describe('UserloginService', () => {
  let service: UserloginService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserloginService
      ],imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.get(UserloginService)
  });

  it('should be created',() => {
    expect(service).toBeTruthy();
  });
});
