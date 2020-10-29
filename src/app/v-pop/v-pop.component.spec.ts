import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VPopComponent } from './v-pop.component';

describe('VPopComponent', () => {
  let component: VPopComponent;
  let fixture: ComponentFixture<VPopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VPopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
