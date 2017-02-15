function init(){
    
}
var map;
function initMap() {
  var myLatLng = {lat: -25.363, lng: 131.044};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng
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




function init(){
    
}
var miMapa;
function initMap() {
  map = new google.maps.Map(
      document.getElementById('map'),
    { 
    center: {
        lat: -16.457389199999998,
        Ing: -71.5315308
    };
    zoom:14
    }
 );
}
    
