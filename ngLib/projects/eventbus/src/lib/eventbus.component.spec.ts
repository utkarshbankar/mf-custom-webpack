import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventbusComponent } from './eventbus.component';

describe('EventbusComponent', () => {
  let component: EventbusComponent;
  let fixture: ComponentFixture<EventbusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventbusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
