import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterMediaComponent } from './master-media.component';

describe('MasterMediaComponent', () => {
  let component: MasterMediaComponent;
  let fixture: ComponentFixture<MasterMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
