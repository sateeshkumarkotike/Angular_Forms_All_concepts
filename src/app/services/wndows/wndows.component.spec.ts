import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WndowsComponent } from './wndows.component';

describe('WndowsComponent', () => {
  let component: WndowsComponent;
  let fixture: ComponentFixture<WndowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WndowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WndowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
