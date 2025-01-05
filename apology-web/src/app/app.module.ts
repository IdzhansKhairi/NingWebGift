import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ForgiveButtonPageComponent } from './forgive-button-page/forgive-button-page.component';
import { SliderHeartPageComponent } from './slider-heart-page/slider-heart-page.component';
import { FinalSorryPageComponent } from './final-sorry-page/final-sorry-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ForgiveButtonPageComponent,
    SliderHeartPageComponent,
    FinalSorryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
