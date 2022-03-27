const burgerMenu = (menu, openBtn, closeBtn, linksNav, toggleClass) => {

    const buttonOpen = document.querySelectorAll(openBtn),
        buttonClose = document.querySelector(closeBtn),
        menuWrapper = document.querySelector(menu),
        links = document.querySelectorAll(linksNav);

    buttonOpen.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            openMenu();

        });
    });
    buttonClose.addEventListener('click', (e) => {
        e.preventDefault();
        closeMenu();

    });

    //Закрываем меню при клике по ссылке
    // links.forEach(item => {
    //     item.addEventListener('click', () => toggleMenu());
    // });


    function openMenu() {
        menuWrapper.classList.add(toggleClass);
    }

    function closeMenu() {
        menuWrapper.classList.remove(toggleClass);
    }

};

export default burgerMenu;