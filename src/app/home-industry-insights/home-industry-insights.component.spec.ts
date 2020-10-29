import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeIndustryInsightsComponent } from "./home-industry-insights.component";

describe("HomeIndustryInsightsComponent", () => {
  let component: HomeIndustryInsightsComponent;
  let fixture: ComponentFixture<HomeIndustryInsightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeIndustryInsightsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIndustryInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
