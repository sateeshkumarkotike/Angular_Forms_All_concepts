import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyApp2Component } from './lazy-app2.component';

describe('LazyApp2Component', () => {
  let component: LazyApp2Component;
  let fixture: ComponentFixture<LazyApp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyApp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyApp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
