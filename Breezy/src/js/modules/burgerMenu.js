const burgerMenu = (menu, openBtn, linksNav) => {


    const mobileMenu = document.querySelector(menu),
        button = document.querySelector(openBtn),
        links = document.querySelectorAll(linksNav);
    // overlay = document.querySelector(overlay_nav);
    button.addEventListener('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });


    //Закрываем меню при клике по ссылке
    links.forEach(item => {
        item.addEventListener('click', () => toggleMenu());
    });

    function toggleMenu() {
        mobileMenu.classList.toggle('mobile-menu-hide');
        button.classList.toggle('open');
        // overlay.classList.toggle('burger-menu_overlay-active');
    }

    // const isMobile = {
    //     Android: function () {
    //         return navigator.userAgent.match(/Android/i);
    //     },
    //     BlackBerry: function () {
    //         return navigator.userAgent.match(/BlackBerry/i);
    //     },
    //     iOS: function () {
    //         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    //     },
    //     Opera: function () {
    //         return navigator.userAgent.match(/Opera Mini/i);
    //     },
    //     Windows: function () {
    //         return navigator.userAgent.match(/IEMobile/i);
    //     },
    //     any: function () {
    //         return (
    //             isMobile.Android() ||
    //             isMobile.BlackBerry() ||
    //             isMobile.iOS() ||
    //             isMobile.Opera() ||
    //             isMobile.Windows()
    //         );
    //     }
    // };




    // if (isMobile.any() || window.innerWidth < 992){
    //     button.addEventListener('click', (e) => {
    //         e.preventDefault();
    //         toggleMenu();
    //     });


    //     //Закрываем меню при клике по ссылке
    //     links.forEach(item => {
    //         item.addEventListener('click', () => toggleMenu());
    //     });
    //     function toggleMenu() {
    //         mobileMenu.classList.toggle('mobile-menu-hide');
    //         button.classList.toggle('open');
    //         // overlay.classList.toggle('burger-menu_overlay-active');
    //     }

    // } else {
    //     mobileMenu.classList.remove('mobile-menu-hide');
    // }

};
export default burgerMenu;