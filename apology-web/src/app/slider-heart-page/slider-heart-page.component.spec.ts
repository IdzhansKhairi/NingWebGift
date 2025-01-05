import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderHeartPageComponent } from './slider-heart-page.component';

describe('SliderHeartPageComponent', () => {
  let component: SliderHeartPageComponent;
  let fixture: ComponentFixture<SliderHeartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderHeartPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderHeartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
