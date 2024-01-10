import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdministrateurComponent } from './create-administrateur.component';

describe('AdminConfigComponent', () => {
  let component: CreateAdministrateurComponent;
  let fixture: ComponentFixture<CreateAdministrateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAdministrateurComponent]
    });
    fixture = TestBed.createComponent(CreateAdministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
