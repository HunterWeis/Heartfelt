$(function(){
	$('#paste').click(function(){pasteSelection();});
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
