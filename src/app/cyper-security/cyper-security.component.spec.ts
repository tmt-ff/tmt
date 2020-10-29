import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyperSecurityComponent } from './cyper-security.component';

describe('CyperSecurityComponent', () => {
  let component: CyperSecurityComponent;
  let fixture: ComponentFixture<CyperSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyperSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyperSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
