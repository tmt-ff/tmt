import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmniChannelEcosystemComponent } from './omni-channel-ecosystem.component';

describe('OmniChannelEcosystemComponent', () => {
  let component: OmniChannelEcosystemComponent;
  let fixture: ComponentFixture<OmniChannelEcosystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmniChannelEcosystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmniChannelEcosystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
