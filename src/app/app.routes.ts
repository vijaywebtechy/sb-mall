import { Routes } from '@angular/router';
import { UnauthLandingHomeComponent } from '../pages/unauth-landing-home/unauth-landing-home.component';
import { UnauthSolutionsComponent } from '../pages/unauth-solutions/unauth-solutions.component';

export const routes: Routes = [
    { path: 'unauth-landing', component: UnauthLandingHomeComponent }, // Unauthenticated landing page
    { path: 'unauth-solutions', component: UnauthSolutionsComponent }, // Unauthenticated landing page
    { path: '**', redirectTo: 'unauth-landing' } // Redirect unknown routes
];
