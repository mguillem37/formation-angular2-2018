import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCoucouComponent } from './test-coucou.component';

describe('TestCoucouComponent', () => {
  let component: TestCoucouComponent;
  let fixture: ComponentFixture<TestCoucouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCoucouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCoucouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
