import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterFullInfoComponent } from './voter-full-info.component';

describe('VoterFullInfoComponent', () => {
  let component: VoterFullInfoComponent;
  let fixture: ComponentFixture<VoterFullInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoterFullInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterFullInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
