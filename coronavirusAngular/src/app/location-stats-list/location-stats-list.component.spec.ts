import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationStatsListComponent } from './location-stats-list.component';

describe('LocationStatsListComponent', () => {
  let component: LocationStatsListComponent;
  let fixture: ComponentFixture<LocationStatsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationStatsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationStatsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
