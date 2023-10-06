import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationFailedComponent } from './reservation-failed.component';

describe('ReservationFailedComponent', () => {
  let component: ReservationFailedComponent;
  let fixture: ComponentFixture<ReservationFailedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationFailedComponent]
    });
    fixture = TestBed.createComponent(ReservationFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
