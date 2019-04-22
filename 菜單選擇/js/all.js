$(document).ready(function () {
    $('.showmenu').on('click', function (e) {
        e.preventDefault();
        $('.nav').toggleClass('showlist');
    });
});