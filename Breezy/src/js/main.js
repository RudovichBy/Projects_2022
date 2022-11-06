// import $ from 'jquery'; window.jQuery = $; window.$ = $;
// import scrollingicator from './modules/scrollingicator';
// import Swiper from 'swiper';
// import Swiper, { Navigation, Pagination, Autoplay, Lazy } from 'swiper';
import Swiper from 'swiper/bundle';
import DLAnimate from 'dl-animate/dist/dl-animate';
import burgerMenu from './modules/burgerMenu';
import navigationSliders from './modules/navigationSliders';
import accordion from './modules/accordion';
import filter from './modules/filter';

window.addEventListener('DOMContentLoaded', () => {
	"use strict";
	// scrollingicator();
	burgerMenu('.header', '.menu-toggle', '.nav-anim');

	const mySwiper = new Swiper('.mySwiper', {
		loop: true,
		speed: 800,
		hashNavigation: true,
		slideToClickedSlide: false,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		  },
	});
	const swiper3 = new Swiper(".tech-stack-slider", {
		loop: true,
		speed: 800,
		slidesPerView: "auto",
		spaceBetween: 20,
		grabCursor: true,
		nested: true,
		autoplay: {
			delay: 1000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
	});
});