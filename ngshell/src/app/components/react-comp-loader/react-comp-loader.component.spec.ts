import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactCompLoaderComponent } from './react-comp-loader.component';

describe('ReactCompLoaderComponent', () => {
  let component: ReactCompLoaderComponent;
  let fixture: ComponentFixture<ReactCompLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactCompLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactCompLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
