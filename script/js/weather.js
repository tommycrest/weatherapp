function checkWeather(el) {
	getWeatherCondition(el.value);
}
function getWeatherCondition(el_value)  {
	if( el_value == null || el_value == undefined || el_value == "" ) {
		//Page reload on city empty 
		//TODO: possible solution on error manage
		location.reload();
	} else {
		showSpinnerHandler();
		var city = el_value;
		var yql_query = "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'";
		$.getJSON("https://query.yahooapis.com/v1/public/yql?q=" + yql_query + "&format=json").success(function(data){
			var forecast = data.query.results.channel.item.forecast;
			$('#temp').html("Today in "+city+" the temperature is " + data.query.results.channel.item.condition.temp + "°C"+" with "+data.query.results.channel.item.condition.text);
			for( var index = 0; index < forecast.length; index++ ) {
				$('#'+index).html(forecast[index].date + " " + "High: "+forecast[index].high+" Low: "+forecast[index].low+" Condition: "+forecast[index].text);
			}
			$('#tempday').show("slow");
			hideSpinnerHandler();
		});
	}
}

function hideForecastHandler() {
	$('#tempday').hide();
}
function showForecastHandler() {
	$('#tempday').show('slow');
}
function hideSpinnerHandler() {
	$('.loading').hide();
}
function showSpinnerHandler() {
	$('.loading').show();
}

// For history on the approach to Yahoo weather api endpoint // 
$(document).ready(function(){

	// On ready state hide forecast table
	hideForecastHandler();
	// On ready state hide the spinner 
	hideSpinnerHandler();
	
	/*var city = "Milano";
	var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'"
	//change city variable dynamically as required
	var searchtext = "select * from geo.places";
	$.getJSON("https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json").success(function(data){
		$('#temp').html(data.query.results);
	});
	/*$.getJSON("https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json").success(function(data){
	  $('#temp').html("Temperature in " + city + " is " + data.query.results.channel.item.condition.temp + "°C"+" "+data.query.results.channel.item.condition.text);
	});*/
	
});