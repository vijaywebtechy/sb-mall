import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';

register(); // Register Swiper custom elements
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
