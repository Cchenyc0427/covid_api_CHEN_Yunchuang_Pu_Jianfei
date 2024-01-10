import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCenterComponent } from './create-center.component';

describe('AdminMonCentersComponent', () => {
  let component: CreateCenterComponent;
  let fixture: ComponentFixture<CreateCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCenterComponent]
    });
    fixture = TestBed.createComponent(CreateCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
