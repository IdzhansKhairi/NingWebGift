import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgiveButtonPageComponent } from './forgive-button-page/forgive-button-page.component';
import { SliderHeartPageComponent } from './slider-heart-page/slider-heart-page.component';
import { FinalSorryPageComponent } from './final-sorry-page/final-sorry-page.component';
import { RedirectToSorryGuard } from './redirect-to-sorry.guard';  // Import the guard

const routes: Routes = [
  { path: '', redirectTo: '/sorry-button', pathMatch: 'full' },  // Default route
  { path: 'sorry-button', component: ForgiveButtonPageComponent },
  { path: 'slider-heart', component: SliderHeartPageComponent },
  { path: 'final-speech', component: FinalSorryPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
