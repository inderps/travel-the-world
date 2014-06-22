var FareApi = {
//  fetch: function(src, destination, date, i, callback){
//    $.ajax({
//      url: "http://developer.goibibo.com/api/stats/minfare/",
//      type:"get",
//      data:{app_id: '3283b490', app_key: '842ec3fc3a9a2eae6587579e2bfa243f', format: 'json', vertical: 'flight', source: src, destination: destination, mode: 'one', sdate: date},
//      success: function(response) {
//        console.log(response);
//        callback(response.resource1, i);
//      },
//      error: function(xhr) {
//        console.log(xhr);
//      }
//    });
//  }
  fetch: function(src, destination, date, i, callback){
    $.ajax({
      url: "http://developer.goibibo.com/api/search/",
      type:"get",
      data:{app_id: '3283b490', app_key: '842ec3fc3a9a2eae6587579e2bfa243f', format: 'json', source: src, destination: destination, adults: 1, dateofdeparture: date, children: 0, infants: 0, seatingclass: 'E'},
      success: function(response) {
        if(response.data.onwardflights.length>0){
          callback(response.data.onwardflights[0], i);
        }
      },
      error: function(xhr) {
        console.log(xhr);
      }
    });
  }
}