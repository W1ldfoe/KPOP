import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteVotersComponent } from './favorite-voters.component';

describe('FavoriteVotersComponent', () => {
  let component: FavoriteVotersComponent;
  let fixture: ComponentFixture<FavoriteVotersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteVotersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteVotersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
