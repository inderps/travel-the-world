var Map = {
  init: function(){
    window.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: new google.maps.LatLng(28.635, 77.22496000000001),
//    mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  },

  addLocation: function(place, price){
    var geocoder =  new google.maps.Geocoder();
    geocoder.geocode( { 'address': place}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        new MarkerWithLabel({
          position: new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng()),
          draggable: false,
          raiseOnDrag: false,
          map: window.map,
          labelContent: price,
          labelAnchor: new google.maps.Point(22, 0),
          labelClass: "labels", // the CSS class for the label
          labelStyle: {opacity: 1.0}
        });
      }
    });
  }
};