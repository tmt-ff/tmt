import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AonaComponent } from './aona.component';

describe('AonaComponent', () => {
  let component: AonaComponent;
  let fixture: ComponentFixture<AonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
