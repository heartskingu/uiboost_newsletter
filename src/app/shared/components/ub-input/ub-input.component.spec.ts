import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbInputComponent } from './ub-input.component';

describe('UbInputComponent', () => {
  let component: UbInputComponent;
  let fixture: ComponentFixture<UbInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UbInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
