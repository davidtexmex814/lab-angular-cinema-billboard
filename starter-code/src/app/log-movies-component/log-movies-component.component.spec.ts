import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogMoviesComponentComponent } from './log-movies-component.component';

describe('LogMoviesComponentComponent', () => {
  let component: LogMoviesComponentComponent;
  let fixture: ComponentFixture<LogMoviesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogMoviesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogMoviesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
