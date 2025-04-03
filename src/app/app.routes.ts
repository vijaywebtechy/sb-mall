import { Routes } from '@angular/router';
import { UnauthLandingHomeComponent } from '../pages/unauth-landing-home/unauth-landing-home.component';

export const routes: Routes = [
    { path: 'unauth-landing', component: UnauthLandingHomeComponent }, // Unauthenticated landing page
    { path: '**', redirectTo: 'unauth-landing' } // Redirect unknown routes
];
