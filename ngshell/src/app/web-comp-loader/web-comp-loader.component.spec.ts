import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCompLoaderComponent } from './web-comp-loader.component';

describe('WebCompLoaderComponent', () => {
  let component: WebCompLoaderComponent;
  let fixture: ComponentFixture<WebCompLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebCompLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebCompLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
