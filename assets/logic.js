

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
                 

    



