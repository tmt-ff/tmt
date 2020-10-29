import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeTmtFactoryComponent } from "./home-tmt-factory.component";

describe("HomeTmtFactoryComponent", () => {
  let component: HomeTmtFactoryComponent;
  let fixture: ComponentFixture<HomeTmtFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeTmtFactoryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTmtFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
