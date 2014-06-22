$(document).ready(function(){
  Map.init();

  for (var index = 0; index < DESTINATIONS.length; index++) {
    FareApi.fetch('DEL', DESTINATIONS[index].code, '20140920', index, function(result, i){
      if(result){
        Map.addLocation(DESTINATIONS[i].place, "Rs: " + result.fare.totalfare);
      }
    });
  }
});