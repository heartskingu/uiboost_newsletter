import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbButtonComponent } from './ub-button.component';

describe('UbButtonComponent', () => {
  let component: UbButtonComponent;
  let fixture: ComponentFixture<UbButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UbButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
