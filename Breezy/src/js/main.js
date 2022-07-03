// import $ from 'jquery'; window.jQuery = $; window.$ = $;
// import scrollingicator from './modules/scrollingicator';
// import Swiper from 'swiper';
// import Swiper, { Navigation, Pagination, Autoplay, Lazy } from 'swiper';
import Swiper from 'swiper/bundle';

import burgerMenu from './modules/burgerMenu';
import accordion from './modules/accordion';
import filter from './modules/filter';

window.addEventListener('DOMContentLoaded', () => {
	"use strict";
	console.log('test')
	// scrollingicator();
	burgerMenu('.header', '.menu-toggle', '.nav-anim');

	let mySwiper = new Swiper('.mySwiper', {
		loop: true,
		speed: 800,
		hashNavigation: true,
		slideToClickedSlide: false,
		// autoHeight: true,
		// autoplay: {
		// 	delay: 3000,
		// 	disableOnInteraction: false,
		// },
		// pagination: {
		//     el: '.swiper-pagination',
		//     clickable: true,
		// },
		// direction: "vertical",
		// slidesPerView: "auto",
		// freeMode: true,
	});
	var swiper3 = new Swiper(".tech-stack-slider", {
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