$(document).ready(function(){
  Map.init();

  for (var index = 0; index < DESTINATIONS.length; index++) {
    ClearTripApi.fetch('DEL', DESTINATIONS[index].code, '20140920', index, function(fare, i){
      if(fare){
        Map.addLocation(DESTINATIONS[i].place, "Rs: " + fare);
      }
    });
  }
});