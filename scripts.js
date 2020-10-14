function calc() {
    $.ajax({
        url: '/calc.php',
        method: 'post',
        dataType: 'html',
        data: $('#calc-form').serialize(),
        success: calcCallback
    });
}

function calcCallback(data) {
    $('.calc__result').html(data);
}

$.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: 'Предыдущий',
    nextText: 'Следующий',
    currentText: 'Сегодня',
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    weekHeader: 'Не',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);
$('#date').datepicker();

$('#calc__summ-slider').slider({
    animate: 'fast',
    range: 'min',
    value: 10000,
    max: 3000000,
    min: 1000,
    step: 1000,
    slide: function (event, ui) {
        $('#summ').val(ui.value);
    }
});

$('#summ').on('change', function () {
    $('#calc__summ-slider').slider('value', this.value);
});

$('#calc__summ-add-slider').slider({
    animate: 'fast',
    range: 'min',
    value: 10000,
    max: 3000000,
    min: 1000,
    step: 1000,
    slide: function (event, ui) {
        $('#summ-add').val(ui.value);
    }
});

$('#summ-add').on('change', function () {
    $('#calc__summ-add-slider').slider('value', this.value);
});

$("#calc__sumbit").on('click', function (e) {
    e.preventDefault();
    calc()
});