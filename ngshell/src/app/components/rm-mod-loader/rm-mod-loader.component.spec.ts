import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmModLoaderComponent } from './rm-mod-loader.component';

describe('RmModLoaderComponent', () => {
  let component: RmModLoaderComponent;
  let fixture: ComponentFixture<RmModLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RmModLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RmModLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
