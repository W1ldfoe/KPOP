import { TestBed } from '@angular/core/testing';

import { FavoriteVoterService } from './favorite-voter.service';

describe('FavoriteVoterService', () => {
  let service: FavoriteVoterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteVoterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
