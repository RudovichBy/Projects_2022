// import $ from 'jquery'; window.jQuery = $; window.$ = $;
// import scrollingicator from './modules/scrollingicator';
// import Swiper from 'swiper';
import Swiper from 'swiper';

import burgerMenu from './modules/burgerMenu';
import accordion from './modules/accordion';

window.addEventListener('DOMContentLoaded', () => {
	"use strict";
	console.log('test')
	// scrollingicator();
	burgerMenu('.header', '.menu-toggle', '.nav-anim');

	let mySwiper = new Swiper('.mySwiper', {
		loop: true,
		speed: 800,
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
	})
});