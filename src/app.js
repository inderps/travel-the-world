$(document).ready(function(){
  Map.init();
  $('#inputDate').datepicker({autoclose: true});
  $('#choiceModal').modal('show');
  $("#inputFrom").select2({
    placeholder: "Search for a airport",
    minimumInputLength: 3,
    id: function(e) { return e.iatacode; },
    ajax: {
      url: "http://www.goibibo.com/common/selectairports",
//      dataType: 'json',
      data: function (term) {
        return {
          search: term
        };
      },
      results: function (data) {
        return {results: data};
      }
    },
    formatResult: function(object, container, query){
      return object.airportname + ', ' + object.cityname + ', ' + object.countryname;
    },
    formatSelection: function(object, container){
      return object.airportname + ', ' + object.cityname + ', ' + object.countryname;
    }
  });
  $('#submitForm').click(function(ev){
    ev.preventDefault();
    var date = new Date($("#inputDate").val());
    var formattedDate = date.getFullYear() + ('0' + (date.getMonth()+1)).slice(-2) + ('0' + date.getDate()).slice(-2);
    for (var index = 0; index < DESTINATIONS.length; index++) {
      ClearTripApi.fetch($("#inputFrom").val(), DESTINATIONS[index].code, formattedDate, index, function(fare, i){
        if(fare){
          Map.addLocation(DESTINATIONS[i].place, "Rs: " + fare);
        }
      });
    }
    $('#choiceModal').modal('hide');
  });
});

function ips(s){
  console.log(s);
}