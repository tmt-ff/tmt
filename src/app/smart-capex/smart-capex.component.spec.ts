import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartCapexComponent } from './smart-capex.component';

describe('SmartCapexComponent', () => {
  let component: SmartCapexComponent;
  let fixture: ComponentFixture<SmartCapexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartCapexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartCapexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
