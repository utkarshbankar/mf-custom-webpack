import { TestBed } from '@angular/core/testing';

import { AppInitilizerService } from './app-initilizer.service';

describe('AppInitilizerService', () => {
  let service: AppInitilizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppInitilizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
