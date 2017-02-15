function init(){
    
}
var map;
function initMap() {
  var myLatLng = {lat: -25.363, lng: 131.044};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng,
         mapTypeControl: true,
         mapTypeControlOptions: {
              style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
              position: google.maps.ControlPosition.TOP_CENTER
    },
         zoomControl: true,
         zoomControlOptions: {
              position: google.maps.ControlPosition.LEFT_CENTER
    },
         scaleControl: true,
         streetViewControl: true,
         streetViewControlOptions: {
              position: google.maps.ControlPosition.LEFT_TOP
    }
  });  

  var marker = new google.maps.Marker({
         position: myLatLng,
         map: map,
         title: 'Hello World!'
  });
    
  var image = '/img/nia.png';
  var beachMarker = new google.maps.Marker({
         position: {lat: -33.890, lng: 151.274},
         map: map,
         icon: image
  });
}

