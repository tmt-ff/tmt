import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiBookingFormComponent } from './mobi-booking-form.component';

describe('MobiBookingFormComponent', () => {
  let component: MobiBookingFormComponent;
  let fixture: ComponentFixture<MobiBookingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobiBookingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobiBookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
