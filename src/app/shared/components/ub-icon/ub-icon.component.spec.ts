import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbIconComponent } from './ub-icon.component';

describe('UbIconComponent', () => {
  let component: UbIconComponent;
  let fixture: ComponentFixture<UbIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UbIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
