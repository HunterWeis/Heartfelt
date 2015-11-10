// You can get your own API key from 
// https://www.havenondemand.com/

var apikey = 'e541ed5b-d513-43a3-bdb2-898d63a50eb6'

$(function(){
	//$('#paste').click(function(){pasteSelection();});
	//$('#search').click(function(){console.log(fetchTweets("dicks"));});
	pasteSelection();
});

function pasteSelection(){
	chrome.tabs.query({active:true,currentWindow: true},
	function(tabs){
		chrome.tabs.sendMessage(tabs[0].id, {method: "getSelection"},
		function(response){
			var text = document.getElementById('text');
			console.log(response.data);
			var res = response.data;
			
			$.ajax({
			    url: "https://api.havenondemand.com/1/api/sync/analyzesentiment/v1?text="+ response.data  +"&apikey=" + apikey,
			    context: document.body,
			  
			   	 error: function (request, error) {
       			 console.log(arguments);

             if (text.innerHTML != "Nothing was highlighted. Try again!"){
       			   text.innerHTML= "Nothing was highlighted. Try again!";
            }


            setTimeout(pasteSelection, 1000)



    				},
    		
    
    				success: function(response){

              text.innerHTML= res;
              			 
					    var sentiment = response["aggregate"]["sentiment"]
					  	var score = response["aggregate"]["score"]
					    console.log("score", sentiment, score)

					    var scoreDiv = document.getElementById('score');
					    var bar = document.getElementById('barWidth');

					    var swearDiv = document.getElementById('swear');

					    //Range from 0 to 2
					    var percentValue = Math.floor((score + 1)/2 * 100)
					    console.log(percentValue)

					    //$(bar).css( "width", percentValue + "%" );

					    $(bar).animate({
							   	width: percentValue + "%"
							  }, 1000, function() {
						    // Animation complete.
						  });


					    	var swearCount = 0;
							for (var i = 0 ; i < swearList.length; i++){
								if ((text.innerHTML).indexOf(swearList[i]) != -1){
									swearCount++;
								}
							}


					    scoreDiv.innerHTML = '' +'<cocks id="sentimentText">Sentiment:</cocks><br>'+ percentValue + '%'
					    swearDiv.innerHTML = '' + 'Swear Count: ' + swearCount




			    }
			});
		});
	});
}











