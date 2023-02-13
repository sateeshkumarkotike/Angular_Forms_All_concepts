import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyApp3Component } from './lazy-app3.component';

describe('LazyApp3Component', () => {
  let component: LazyApp3Component;
  let fixture: ComponentFixture<LazyApp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyApp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyApp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
