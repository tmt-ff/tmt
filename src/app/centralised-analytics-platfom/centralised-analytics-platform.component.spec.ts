import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralisedAnalyticsPlatformComponent } from './centralised-analytics-platform.component';

describe('CentralisedAnalyticsPlatformComponent', () => {
  let component: CentralisedAnalyticsPlatformComponent;
  let fixture: ComponentFixture<CentralisedAnalyticsPlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralisedAnalyticsPlatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralisedAnalyticsPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
