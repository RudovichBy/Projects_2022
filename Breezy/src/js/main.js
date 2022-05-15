// import $ from 'jquery'; window.jQuery = $; window.$ = $;
// import scrollingicator from './modules/scrollingicator';
import burgerMenu from './modules/burgerMenu';
// import Swiper from 'swiper';


window.addEventListener('DOMContentLoaded', () => {
	"use strict";
	console.log('test')
	// scrollingicator();
	burgerMenu('.header', '.menu-toggle', '.nav-anim');

});