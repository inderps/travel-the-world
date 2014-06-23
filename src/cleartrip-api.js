var ClearTripApi = {
  fetch: function(src, destination, date, tripDays, i, callback){
    $.ajax({
      url: "http://www.cleartrip.com/flights/calendar/calendarstub.json",
      type:"get",
      data:{from: src, to: destination, adults: 1, start_date: date, end_date: date, return_after: tripDays},
      success: function(response) {
        var jsonStart = response.responseText.indexOf("<p>") + 3;
        var jsonEnd = response.responseText.indexOf("</p>");
        var responseObj = eval("("+response.responseText. substring(jsonStart, jsonEnd)+")");
        if(responseObj['calendar_json'][date].length>0){
          callback(_.min(responseObj['calendar_json'][date], function(flight){ return parseFloat(flight.pr); }).pr, i);
        }
      },
      error: function(xhr) {
        console.log(xhr);
      }
    });
  }
}