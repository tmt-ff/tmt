import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelGuardianComponent } from './model-guardian.component';

describe('ModelGuardianComponent', () => {
  let component: ModelGuardianComponent;
  let fixture: ComponentFixture<ModelGuardianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelGuardianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelGuardianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
