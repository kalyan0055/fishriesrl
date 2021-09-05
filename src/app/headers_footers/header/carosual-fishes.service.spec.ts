import { TestBed } from '@angular/core/testing';

import { CarosualFishesService } from './carosual-fishes.service';

describe('CarosualFishesService', () => {
  let service: CarosualFishesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarosualFishesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
