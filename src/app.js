$(document).ready(function(){
  Map.init();
  Map.addLocation('pakistan', "Rs 500");

  FareApi.fetch('DEL', 'IXB', '20140628', function(result){
    console.log(result.fare);
  });

});