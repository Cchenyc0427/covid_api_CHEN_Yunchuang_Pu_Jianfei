import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMonCentersComponent } from './admin-mon-centers.component';

describe('AdminMonCentersComponent', () => {
  let component: AdminMonCentersComponent;
  let fixture: ComponentFixture<AdminMonCentersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminMonCentersComponent]
    });
    fixture = TestBed.createComponent(AdminMonCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
