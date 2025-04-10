import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions  } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-solutions-range-carousel',
  imports: [CommonModule, CarouselModule],
  templateUrl: './solutions-range-carousel.component.html',
  styleUrl: './solutions-range-carousel.component.scss'
})
export class SolutionsRangeCarouselComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    nav: true,

    navSpeed: 700,
    navText: ['Previous', 'Next'],
    margin: 16,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
  }
  
}
