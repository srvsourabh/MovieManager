import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmoviesComponent } from './viewmovies.component';

describe('ViewmoviesComponent', () => {
  let component: ViewmoviesComponent;
  let fixture: ComponentFixture<ViewmoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
