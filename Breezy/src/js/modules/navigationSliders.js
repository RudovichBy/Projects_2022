console.log('test');

let navLink = document.querySelectorAll('.nav_link');

// let sliderItem = document.querySelectorAll('.swiper-slide');
let sliderItem = document.querySelectorAll('[data-hash]');
console.log(sliderItem);

for (let i = 0; i < navLink.length; i++){
    console.log(navLink[i].getAttribute('id'));
}

// for (let i = 0; sliderItem.length; i++){
    
//     // console.log(sliderItem[i])
//     // if (sliderItem[i].getAttribute('data-hash')) {
        
//     //     console.log(sliderItem[i].getAttribute('data-hash'));
//     // }
// }