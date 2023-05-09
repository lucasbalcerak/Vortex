
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

let map;
initMap();

// async function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 52.60589064161958, lng:  21.11600586137695 },
//     zoom: 15
//     ,
//   });
  
// }

async function initMap() {
    // The location of Uluru
    const position = { lat: 52.60589064161958, lng: 21.11600586137695 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  
    // The map, centered at Uluru
    map = new Map(document.getElementById("map"), {
      zoom: 14,
      center: position,
      mapId: "Vortex",
    });
  
    // The marker, positioned at Uluru
    const marker = new AdvancedMarkerElement({
      map: map,
      position: position,
      title: "Vortex Sp Z.o.o",
    });
  }
  
