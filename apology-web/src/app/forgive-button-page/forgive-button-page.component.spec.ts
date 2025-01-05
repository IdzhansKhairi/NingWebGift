import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgiveButtonPageComponent } from './forgive-button-page.component';

describe('ForgiveButtonPageComponent', () => {
  let component: ForgiveButtonPageComponent;
  let fixture: ComponentFixture<ForgiveButtonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForgiveButtonPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgiveButtonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
