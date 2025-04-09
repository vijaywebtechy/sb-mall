import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-tab-carousel',
  imports: [CarouselModule], // Import OwlModule here
  templateUrl: './tab-carousel.component.html',
  styleUrl: './tab-carousel.component.scss',
})
export class TabCarouselComponent {
  customOptions: OwlOptions = {
    mouseDrag: true, // Enable mouse dragging
    touchDrag: true, // Enable touch dragging
    pullDrag: true,
    dots: true, // Show navigation dots
    navSpeed: 700, // Transition speed
    navText: ['Previous', 'Next'], // Custom nav button text
    nav: true, // Show navigation arrows
    responsive: {
      0: {
        items: 1,
      },
    },
  };
}
