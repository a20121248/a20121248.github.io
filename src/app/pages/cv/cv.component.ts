import { Component, OnInit } from '@angular/core';
// import Swiper core and required modules
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, SwiperOptions } from 'swiper';
import { Title } from '@angular/platform-browser';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.sass']
})
export class CvComponent implements OnInit {
  configEdu: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }
  };
  configCert: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }
  };
  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  public constructor(private titleService: Title) {
    this.titleService.setTitle("CV | Personal website of Javier Monzon");
  }

  ngOnInit(): void {
  }

}
