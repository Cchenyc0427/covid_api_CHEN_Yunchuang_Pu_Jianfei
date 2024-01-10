import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdminstrateurComponent } from './edit-adminstrateur.component';

describe('EditAdminstrateurComponent', () => {
  let component: EditAdminstrateurComponent;
  let fixture: ComponentFixture<EditAdminstrateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAdminstrateurComponent]
    });
    fixture = TestBed.createComponent(EditAdminstrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
