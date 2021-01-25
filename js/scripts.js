document.addEventListener('DOMContentLoaded', function () {
    /**
     * @desc Функция, которая переключает табы в секции Services.
     **/

    const tabs = document.querySelector('.tabs');

    tabs.addEventListener('click', (event) => showContent(event, '.tabs-title', '.tab-content'));

    function showContent(event, tabClass = '.tabs-title', tabContentClass = '.tab-content', cb = () => true) {
        document.querySelector(tabClass + '.active').classList.remove('active');
        event.target.classList.add('active');
        const content = document.querySelectorAll(tabContentClass);

        for (const element of content) {
            element.getAttribute('data-tab') === event.target.getAttribute('data-tab')
                ? element.classList.add('active')
                : element.classList.remove('active');
        }

        if (typeof cb === 'function') {
            cb(content, event);
        }
    };


    /**
     * @desc Фильтр для секции Work
     **/

    const tabsWorkSection = document.querySelector('.tabs-work-section');

    tabsWorkSection.addEventListener('click', (event) => showContent(event, '.tabs-title-work-section', '.gallery-item', (content, event) => {
        if (event && event.target && event.target.getAttribute('data-tab') === 'all') {
            for (const element of content) {
                element.classList.add('active')
            }
        }
    }));


    /**
     * @desc Функция, которая подгружает картинки в секцию Work при нажатии на кнопку.
     **/

    const galleryContainer = document.getElementById('gallery-container');
    const loadMoreBtn = document.getElementById('button-load-more');

    loadMoreBtn.addEventListener('click', function () {
        const imgArr = [
            {src: './images/graphic_design/graphic-design1.jpg', category: 'graphic-design'},
            {src: './images/graphic_design/graphic-design2.jpg', category: 'web-design'},
            {src: './images/graphic_design/graphic-design3.jpg', category: 'landing-pages'},
            {src: './images/graphic_design/graphic-design4.jpg', category: 'wordpress'},
            {src: './images/graphic_design/graphic-design5.jpg', category: 'graphic-design'},
            {src: './images/graphic_design/graphic-design6.jpg', category: 'web-design'},
            {src: './images/graphic_design/graphic-design7.jpg', category: 'landing-pages'},
            {src: './images/graphic_design/graphic-design8.jpg', category: 'wordpress'},
            {src: './images/graphic_design/graphic-design9.jpg', category: 'graphic-design'},
            {src: './images/graphic_design/graphic-design10.jpg', category: 'web-design'},
            {src: './images/graphic_design/graphic-design11.jpg', category: 'landing-pages'},
            {src: './images/graphic_design/graphic-design12.jpg', category: 'wordpress'}
        ];

        for (let i = 0; i < imgArr.length; i++) {
            const galleryItem = createDomElement('div', ['gallery-item', 'active'], 'data-tab', imgArr[i].category, galleryContainer);
            const img = createDomElement('img', ['gallery-img'], 'src', imgArr[i].src, galleryItem);
            const hover = createDomElement('div', ['gallery-item-hover'], '', '', galleryItem);
            const icons = createDomElement('ul', [], '', '', hover);
            const chainIcon = createDomElement('li', ['chain-icon'], '', '', icons);
            const figure1 = createDomElement('i', ['fas', 'fa-link'], '', '', chainIcon);
            const squareIcon = createDomElement('li', ['square-icon'], '', '', icons);
            const figure2 = createDomElement('i', ['fas', 'fa-square-full'], '', '', squareIcon);
            const heading1 = createDomElement('p', ['gallery-item-heading'], '', '', hover);
            const heading2 = createDomElement('p', ['gallery-item-text'], '', '', hover);

            heading1.innerHTML = 'creative design';
            heading2.innerHTML = 'Web Design';

        }
        loadMoreBtn.remove();
    });

    function createDomElement(tag, classArr = ['gallery-item', 'active'], attr, value, insert) {
        const element = document.createElement(tag);

        for (const el of classArr) {
            element.classList.add(el);
        }

        if (attr && value) {
            element.setAttribute(attr, value);
        }

        insert.append(element);
        return element;
    };

    /**
     * @desc Функция, которая переключает изображения в слайдере.
     **/
    const sliderCarousel = document.querySelector('.slider-carousel-wrapper');
    let index = 1;
    sliderCarousel.addEventListener('click', (event) => arrowButtonClick(event));
    let bottom = 0;

    function arrowButtonClick(event) {

        for (let i = 0; i < document.querySelectorAll('.carousel-item').length; i++) {
            document.querySelectorAll('.carousel-item')[i].removeAttribute('style');
            document.querySelectorAll('.slider-main-item')[i].classList.remove('active');
            document.querySelectorAll('.slider-title-item')[i].classList.remove('active');
        }

        if (event.target.classList.contains('right')) {
            if (index === document.querySelectorAll('.carousel-item').length) {
                index = 0;
            }
            index++;
            document.querySelector('.carousel-item[data-item="' + index + '"]').style.bottom = 30 + 'px';
            document.querySelector('.slider-main-item[data-item="' + index + '"]').classList.add('active');
            document.querySelector('.slider-title-item[data-item="' + index + '"]').classList.add('active');

        } else if (event.target.classList.contains('left')) {
            if (index === 1) {
                index = document.querySelectorAll('.carousel-item').length + 1;
            }
            index--;
            document.querySelector('.carousel-item[data-item="' + index + '"]').style.bottom = 30 + 'px';
            document.querySelector('.slider-main-item[data-item="' + index + '"]').classList.add('active');
            document.querySelector('.slider-title-item[data-item="' + index + '"]').classList.add('active');
        }

        if (event.target.classList.contains('slider-image')) {
            event.target.closest('div').style.bottom = 30 + 'px';
            document.querySelector('.slider-main-item[data-item="' + event.target.closest('div').getAttribute('data-item') + '"]').classList.add('active');
            document.querySelector('.slider-title-item[data-item="' + event.target.closest('div').getAttribute('data-item') + '"]').classList.add('active');
            index = event.target.closest('div').getAttribute('data-item');
        }

    }
});


























// Анимация
    /*let bottom = 0;
    function getItemUp(bottom) {
        if(bottom > 30) {
            clearInterval(interval)
        }
        document.querySelector('.carousel-item[data-item="' + index + '"]').style.bottom = bottom + 'px';
        document.querySelector('.slider-main-item[data-item="' + index + '"]').classList.add('active');
        document.querySelector('.slider-title-item[data-item="' + index + '"]').classList.add('active');
        return  bottom += 2;
    }

    const interval = setInterval(getItemUp(bottom), 40);*/

