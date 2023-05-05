
$(document).ready(function () {

    var counter = 1
    $('.btn').click(function (e) { 
        e.preventDefault(e);

        $('.btn').toggleClass('open');

        if(counter % 2 != 0){
            $('.links').css('height', '250px');
            counter++;
        } else {
            $('.links').css('height', '0px');
            counter++;
        }
    });

    var imageUrls = ['#image-one', '#image-two', '#image-three'];
    var imageCount = 0;
    setInterval( function() {
        $(imageUrls[imageCount]).addClass('image-bottom');
        if($(imageUrls[imageCount]).hasClass('image-up') && imageCount < 2) {
            $(imageUrls[imageCount + 1]).removeClass('image-bottom');
            $(imageUrls[imageCount + 1]).addClass('image-up');
        } else {
            $(imageUrls[0]).removeClass('image-bottom');
            $(imageUrls[0]).addClass('image-up');
        }
        imageCount == imageUrls.length-1 ? imageCount = 0 : imageCount++;

    }, 6000)
});