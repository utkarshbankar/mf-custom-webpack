import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifestloaderComponent } from './manifestloader.component';

describe('ManifestloaderComponent', () => {
  let component: ManifestloaderComponent;
  let fixture: ComponentFixture<ManifestloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManifestloaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManifestloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
