
$(document).ready(function () {

    var counter = 1
    $(".btn").click(function (e) { 
        e.preventDefault(e);

        $('.btn').toggleClass('open');

        if(counter % 2 != 0){
            $('.links').css('height', '200px');
            counter++;
        } else {
            $('.links').css('height', '0px');
            counter++;
        }
    });
});