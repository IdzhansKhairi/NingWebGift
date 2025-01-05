import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalSorryPageComponent } from './final-sorry-page.component';

describe('FinalSorryPageComponent', () => {
  let component: FinalSorryPageComponent;
  let fixture: ComponentFixture<FinalSorryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinalSorryPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalSorryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
