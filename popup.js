$(function(){
	$('#paste').click(function(){pasteSelection();});
	$('#search').click(function(){console.log(fetchTweets("dicks"));});
});

function pasteSelection(){
	chrome.tabs.query({active:true,currentWindow: true},
	function(tabs){
		chrome.tabs.sendMessage(tabs[0].id, {method: "getSelection"},
		function(response){
			var text = document.getElementById('text');
			console.log(response.data);
			//sentiment('text')
			text.innerHTML= response.data;
			
			$.ajax({
			    url: "https://api.havenondemand.com/1/api/sync/analyzesentiment/v1?text="+ response.data  +"&apikey=e541ed5b-d513-43a3-bdb2-898d63a50eb6",
			    context: document.body,
			   success: function(response){
			 
					    var sentiment = response["aggregate"]["sentiment"]
					  	var score = response["aggregate"]["score"]
					    console.log("score", sentiment, score)

					    var scoreDiv = document.getElementById('score');
					    var bar = document.getElementById('barWidth');

					    //Range from 0 to 2
					    var percentValue = Math.floor((score + 1)/2 * 100)
					    console.log(percentValue)

					    //$(bar).css( "width", percentValue + "%" );

					    $(bar).animate({
							   	width: percentValue + "%"
							  }, 1000, function() {
						    // Animation complete.
						  });

					    scoreDiv.innerHTML = '' + percentValue + '%';
			    }
			});
		});
	});
}

function fetchTweets(q) {
 
  var yql  = "https://query.yahooapis.com/v1/public/yql?q=show%20tables&diagnostics=true"
  var base = "https://twitter.com/i/search/timeline?f=realtime&src=typd&include_entities=0&q=";
 
 https://query.yahooapis.com/v1/public/yql?q=show%20tables&diagnostics=true"https://twitter.com/i/search/timeline?f=realtime&src=typd&include_entities=0&q=dicks%22&format=json
  // Test the URL in YQL console to make sure it works
  var url  = yql + base + encodeURIComponent(q) + "%22&format=json";
 
   // Make synchronous AJAX request to yql
  var tweets = jQuery.ajax({type: "GET", url: url, dataType: 'json', async: false }).responseText;
 

  // Parse the JSON response
  var data = JSON.parse(tweets);

  console.log(data)
 
  // Return the HTML search results
  return data.query.results.json.items_html;

  /*
  console.log(data.query.results.json.items_html)

  $.ajax({
			    url: "https://api.havenondemand.com/1/api/sync/analyzesentiment/v1?text="+ data.query.results.json.items_html[0]  +"&apikey=e541ed5b-d513-43a3-bdb2-898d63a50eb6",
			    context: document.body,
			   success: function(response){
			 
					    var sentiment = response["aggregate"]["sentiment"]
					  	var score = response["aggregate"]["score"]
					    console.log("score", sentiment, score)

					    var scoreDiv = document.getElementById('score');
					    var bar = document.getElementById('barWidth');


					    
			    }
			});
  */
  
}













