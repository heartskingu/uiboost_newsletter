import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbCardComponent } from './ub-card.component';

describe('UbCardComponent', () => {
  let component: UbCardComponent;
  let fixture: ComponentFixture<UbCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UbCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
