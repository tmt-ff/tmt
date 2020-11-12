import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartContactCentresComponent } from './Smart-Contact-Centres.component';

describe('SmartContactCentresComponent', () => {
  let component: SmartContactCentresComponent;
  let fixture: ComponentFixture<SmartContactCentresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartContactCentresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartContactCentresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
