var userInfo;

function getLocation(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        callback;
    }
    else {
      console.log('sorry please enable location for app');
    }
}

function showPosition(position,callback) {
  var userlat = position.coords.latitude;
  var userlong =position.coords.longitude;
  userInfo = {
    userlat:userlat,
    userlong:userlong
  };
  console.log(userInfo);
  initMap();
}

getLocation();
swiperJS();

var galleryTop = new Swiper('.gallery-top', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 10,
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true
});
galleryTop.params.control = galleryThumbs;
galleryThumbs.params.control = galleryTop;

function initMap() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat:Number(userInfo.userlat), lng:Number(userInfo.userlong)}
  });
  directionsDisplay.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsDisplay);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  console.log(userInfo);
  directionsService.route({
    origin: userInfo.userlat + ', ' + userInfo.userlong,
    destination: '6049 Seaview Ave NW Seattle, WA 98107',
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}
