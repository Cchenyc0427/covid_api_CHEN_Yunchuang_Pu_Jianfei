import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCentersComponent } from './admin-centers.component';

describe('AdminCentersComponent', () => {
  let component: AdminCentersComponent;
  let fixture: ComponentFixture<AdminCentersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCentersComponent]
    });
    fixture = TestBed.createComponent(AdminCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
