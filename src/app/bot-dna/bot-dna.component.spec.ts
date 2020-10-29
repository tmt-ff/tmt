import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotDnaComponent } from './bot-dna.component';

describe('BotDnaComponent', () => {
  let component: BotDnaComponent;
  let fixture: ComponentFixture<BotDnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotDnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotDnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
