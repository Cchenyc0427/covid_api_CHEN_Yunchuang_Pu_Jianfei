import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrouverUnCentreComponent } from './trouver-un-centre.component';

describe('TrouverUnCentreComponent', () => {
  let component: TrouverUnCentreComponent;
  let fixture: ComponentFixture<TrouverUnCentreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrouverUnCentreComponent]
    });
    fixture = TestBed.createComponent(TrouverUnCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
