import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOurSolutionComponent } from './home-our-solution.component';

describe('HomeOurSolutionComponent', () => {
  let component: HomeOurSolutionComponent;
  let fixture: ComponentFixture<HomeOurSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOurSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOurSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
