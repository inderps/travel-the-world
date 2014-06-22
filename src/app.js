$(document).ready(function(){
  Map.init();
  Map.addLocation('pakistan', "Rs 500");

//  $.ajax({
//    url: "fares",
//    type:"get",
//    data:{},
//    success: function(response) {
//      //Do Something
//    },
//    error: function(xhr) {
//      //Do Something to handle error
//    }
//  });

  $.ajax({
    url: "http://developer.goibibo.com/api/stats/minfare/",
    type:"get",
    data:{app_id: '3283b490', app_key: '842ec3fc3a9a2eae6587579e2bfa243f', format: 'json', vertical: 'flight', source: 'DEL', destination: 'BOM', mode: 'one', sdate: '20140808'},
    success: function(response) {
      console.log(response);
      //Do Something
    },
    error: function(xhr) {
      //Do Something to handle error
    }
  });

});