import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoucoucChild2Component } from './coucouc-child2.component';

describe('CoucoucChild2Component', () => {
  let component: CoucoucChild2Component;
  let fixture: ComponentFixture<CoucoucChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoucoucChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoucoucChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
