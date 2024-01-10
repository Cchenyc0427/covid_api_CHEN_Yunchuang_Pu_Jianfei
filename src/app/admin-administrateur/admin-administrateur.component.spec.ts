import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdministrateurComponent } from './admin-administrateur.component';

describe('AdminPlanningComponent', () => {
  let component: AdminAdministrateurComponent;
  let fixture: ComponentFixture<AdminAdministrateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAdministrateurComponent]
    });
    fixture = TestBed.createComponent(AdminAdministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
