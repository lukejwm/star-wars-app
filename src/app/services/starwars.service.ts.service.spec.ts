import { TestBed } from '@angular/core/testing';

import { Starwars.Service.TsService } from './starwars.service.ts.service';

describe('Starwars.Service.TsService', () => {
  let service: Starwars.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Starwars.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
