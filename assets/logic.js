

$("#button").on("click", function() {
	event.preventDefault();
	$("tbody").empty();
	$("#table").show();
	$("#slide").hide();
	console.log($("#CityInput").val());
    var oArgs = {

        app_key: "k8DZJrCKTzw5f9QC",

        location: $("#CityInput").val(),

        page_size: 10,

    };
     var APIURL = "https://cors-anywhere.herokuapp.com/http://api.hotwire.com/v1/tripstarter/hotel";
    var APIKey = "9utpjxqyqm6wd2r3bvtgw5mr";
    
// sensing the on click function to run the ajax
        var CityInput = $("#CityInput").val();
        var DateIn = $("#dateselector1").val();
        var DateOut = $("#dateselector2").val();

        var date1 = new Date(DateIn).toLocaleDateString();
        var date2 = new Date(DateOut).toLocaleDateString();

        var queryURL =  "https://hotwire.herokuapp.com/v1/search/hotel?apikey=9utpjxqyqm6wd2r3bvtgw5mr&dest="
         + CityInput + "&rooms=1&adults=1&children=0&startdate=" + date1 + "&enddate=" + date2 + "&format=json";
        
            $.ajax({
            url: queryURL,
            // headers: { 'X-Requested-With': '*', 'Origin': ""},
            method: "GET"
            })
            .done(function(response) {
            var resultsH = response;
            console.log(date1);
            console.log(date2)
            console.log(JSON.parse(resultsH));
            console.log(resultsH.result);
  

    EVDB.API.call("/events/search", oArgs, function(oData) {
    	if (!oData.events) {
    		console.log("no events");
    	} else {
	    	for (var i = 0; i < oData.events.event.length; i++) {
	    		console.log(oData.events.event[i].title);
	    			var results = oData.events.event[i].title;
	    		$("tbody").append("<tr><td>" + "Coming Soon" + "</td><td>" + "Coming Soon" + "</td><td>" + results + "</td></tr>");
	    	}
	    }

    });
});
                  });

    



