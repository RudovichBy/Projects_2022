{
    //**************************фильтр**************************
    const filter = () => {
        const menu = document.querySelector('.filters'),
            items = menu.querySelectorAll('.filters-item'),
            // dataGroup = document.querySelectorAll('[data-group]'),
            // btnAll = dataGroup.,
            btnSuit = menu.querySelector('.suit'),
            btnCss = menu.querySelector('.css__practick'),
            btnJs = menu.querySelector('.js__practick'),
            btnModx = menu.querySelector('.modx'),
            wrapper = document.querySelector('.main__portfolio__wrapper'),
            markAll = wrapper.querySelectorAll('.all'),
            markJs = wrapper.querySelectorAll('.js__practick'),
            markModx = wrapper.querySelectorAll('.modx'),
            markSuit = wrapper.querySelectorAll('.suit'),
            markCss = wrapper.querySelectorAll('.css__practick');

        const typeFilter = (markType) => {
            markAll.forEach(mark => {
                mark.style.display = 'none';
                mark.classList.remove('animated', 'fadeIn');
            });

            if (markType) {
                markType.forEach(mark => {
                    mark.style.display = 'block';
                    mark.classList.add('animated', 'fadeIn');
                });
            } else {
                no.style.display = 'block';
                no.classList.add('animated', 'fadeIn');
            }
        };

        btnAll.addEventListener('click', () => {
            typeFilter(markAll);
        });

        btnSuit.addEventListener('click', () => {
            typeFilter(markSuit);
        });

        btnCss.addEventListener('click', () => {
            typeFilter(markCss);
        });

        btnModx.addEventListener('click', () => {
            typeFilter(markModx);
        });

        btnJs.addEventListener('click', () => {
            typeFilter(markJs);
        });

        menu.addEventListener('click', (e) => {
            let target = e.target;

            if (target && target.tagName == 'LI') {
                items.forEach(btn => btn.classList.remove('filters-item_active'));
                target.classList.add('filters-item_active');
            }
        });
    };

    filter();
}
// console.log(2);
// const menu = document.querySelector('.filters'),
//     items = menu.querySelectorAll('.filters-item');
// // dataGroup = items.getAttribute('data-group');
// console.log(items);
// items.forEach(item => {
//     console.log(item.getAttribute('data-group'));
//     if (item.getAttribute('data-group') == 'category_css') {
//         console.log(5);
//     } else {
//         console.log(6);
//     }
// })