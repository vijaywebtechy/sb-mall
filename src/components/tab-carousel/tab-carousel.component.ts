import {
  Component,
  OnInit,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';

// Register Swiper custom elements
register();

@Component({
  selector: 'app-tab-carousel',
  imports: [CommonModule], // Import OwlModule here
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tab-carousel.component.html',
  styleUrl: './tab-carousel.component.scss',
})
export class TabCarouselComponent implements AfterViewInit {
  @ViewChild('swiper') swiperContainer!: ElementRef;

  slides = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5'];
  slidesPerView = 2;

  ngAfterViewInit() {
    const swiperEl = this.swiperContainer.nativeElement;

    Object.assign(swiperEl, {
      slidesPerView: this.slidesPerView,
      spaceBetween: 30,
    });

    swiperEl.initialize();
  }

  // Optional: Add manual navigation methods
  slideNext() {
    this.swiperContainer.nativeElement.swiper.slideNext();
  }

  slidePrev() {
    this.swiperContainer.nativeElement.swiper.slidePrev();
  }
}
