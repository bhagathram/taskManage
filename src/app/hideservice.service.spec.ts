import { TestBed, inject } from '@angular/core/testing';

import { HideserviceService } from './hideservice.service';

describe('HideserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HideserviceService]
    });
  });

  it('should be created', inject([HideserviceService], (service: HideserviceService) => {
    expect(service).toBeTruthy();
  }));
});
