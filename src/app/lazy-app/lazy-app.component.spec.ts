import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyAppComponent } from './lazy-app.component';

describe('LazyAppComponent', () => {
  let component: LazyAppComponent;
  let fixture: ComponentFixture<LazyAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
