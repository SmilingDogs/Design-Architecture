
$(document).ready(function() { // проверка на загрузку ДОМ-дерева и страницы

    $(document).on('click', 'a', (evt) => { //слушатель события клик подвешиваем на ссылки "а"
        evt.preventDefault(); //запрет моментального перехода
        const id  = $(evt.target).attr('href'); //получаем id якоря,черех значение 'href' ссылки на которую нажали.
        const ancor = $(id).offset().top; // получаем координаты по вертикали якоря
        $('body, html').animate({scrollTop: ancor}, 900); // анимация скролла страницы до якоря
    });

    const btn = $('.top-button'); // получаем кнопку btn  по селектору класса '.top-button'

    $(document).on('scroll', ()=> { //обработчик события 'scroll' на весь документ
      if ($(window).scrollTop() > 400) { // если  позиция Скролла окна вниз  больше 400
        btn.fadeIn('slow'); // кнопка медленно появляется
        btn.addClass('show'); //кнопке присваивается стиль 'show'
      } else {
        btn.fadeOut('slow') // кнопка медленно исчезает
        btn.removeClass('show'); // кнопке удаляют стиль 'show'
      }
    });

    btn.on('click', (evt) => { // обработчик события клик на кнопке '.top-button'
      evt.preventDefault(); //запрет моментального исполнения перехода
      $('body, html').animate({scrollTop: 0}, 900); //плавный переход наверх страницы за 900 милисекунд
    });

    const toggleImg = $('#slide-toggle'); //получаем кнопку с id = "slide-toggle"
    const slides = $('.most-popular-container'); // получаем ul - контейнер лишек

    toggleImg.on('click',() => { // обработчик события клик по кнопке "slide-toggle"
    slides.slideToggle('slow'); // выполняет функцию переключателя: показывать слайды ( li)/ скрывать слайды

    });
});
