var FareApi = {
  fetch: function(src, destination, date, callback){
    $.ajax({
      url: "http://developer.goibibo.com/api/stats/minfare/",
      type:"get",
      data:{app_id: '3283b490', app_key: '842ec3fc3a9a2eae6587579e2bfa243f', format: 'json', vertical: 'flight', source: src, destination: destination, mode: 'one', sdate: date},
      success: function(response) {
        console.log(response);
        callback(response.resource1);
      },
      error: function(xhr) {
      }
    });
  }
}