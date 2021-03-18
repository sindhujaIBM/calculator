import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PreviousdataService } from './previousdata.service';

describe('PreviousdataService', () => {
  let service: PreviousdataService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreviousdataService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.get(PreviousdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
