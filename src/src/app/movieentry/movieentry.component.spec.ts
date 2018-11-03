import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieentryComponent } from './movieentry.component';

describe('MovieentryComponent', () => {
  let component: MovieentryComponent;
  let fixture: ComponentFixture<MovieentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
