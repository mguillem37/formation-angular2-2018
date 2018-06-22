import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoucouChild1Component } from './coucou-child1.component';

describe('CoucouChild1Component', () => {
  let component: CoucouChild1Component;
  let fixture: ComponentFixture<CoucouChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoucouChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoucouChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
