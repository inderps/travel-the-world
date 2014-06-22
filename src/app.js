$(document).ready(function(){
  Map.init();
  $('#inputDate').datepicker({autoclose: true});
  $('#choiceModal').modal('show');
  $('#submitForm').click(function(ev){
    ev.preventDefault();
    var date = new Date($("#inputDate").val());
    var formattedDate = date.getFullYear() + ('0' + (date.getMonth()+1)).slice(-2) + ('0' + date.getDate()).slice(-2);
    for (var index = 0; index < DESTINATIONS.length; index++) {
      ClearTripApi.fetch('DEL', DESTINATIONS[index].code, formattedDate, index, function(fare, i){
        if(fare){
          Map.addLocation(DESTINATIONS[i].place, "Rs: " + fare);
        }
      });
    }
    $('#choiceModal').modal('hide');
  });

});