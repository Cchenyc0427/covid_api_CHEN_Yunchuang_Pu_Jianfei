import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlanningComponent } from './admin-planning.component';

describe('AdminPlanningComponent', () => {
  let component: AdminPlanningComponent;
  let fixture: ComponentFixture<AdminPlanningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPlanningComponent]
    });
    fixture = TestBed.createComponent(AdminPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
