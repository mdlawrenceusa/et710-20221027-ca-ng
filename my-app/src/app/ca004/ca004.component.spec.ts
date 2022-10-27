import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ca004Component } from './ca004.component';

describe('Ca004Component', () => {
  let component: Ca004Component;
  let fixture: ComponentFixture<Ca004Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ca004Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ca004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
