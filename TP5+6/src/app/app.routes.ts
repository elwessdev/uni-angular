import { Routes } from '@angular/router';
// import { FaceSnapComponent } from './face-snap-dsi22/face-snap-dsi22.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'facesnaps', component: FaceSnapListComponent },
  { path: 'a', component: FaceSnapListComponent }
  
];
