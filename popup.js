<<<<<<< HEAD
// You can get your own API key from 
// https://www.havenondemand.com/

var apikey = 'e541ed5b-d513-43a3-bdb2-898d63a50eb6'

$(function(){
	//$('#paste').click(function(){pasteSelection();});
	//$('#search').click(function(){console.log(fetchTweets("dicks"));});
	pasteSelection();
=======
$(function(){
	$('#paste').click(function(){pasteSelection();});
>>>>>>> af10ba4... push all works in few hours to homeee boiizz skillt
});

function pasteSelection(){
	chrome.tabs.query({active:true,currentWindow: true},
	function(tabs){
		chrome.tabs.sendMessage(tabs[0].id, {method: "getSelection"},
		function(response){
			var text = document.getElementById('text');
			console.log(response.data);
<<<<<<< HEAD
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
              			 
=======
			//sentiment('text')
			text.innerHTML= response.data;
			
			$.ajax({
			    url: "https://api.havenondemand.com/1/api/sync/analyzesentiment/v1?text="+ response.data  +"&apikey=e541ed5b-d513-43a3-bdb2-898d63a50eb6",
			    context: document.body,
			   success: function(response){
			 
>>>>>>> af10ba4... push all works in few hours to homeee boiizz skillt
					    var sentiment = response["aggregate"]["sentiment"]
					  	var score = response["aggregate"]["score"]
					    console.log("score", sentiment, score)

					    var scoreDiv = document.getElementById('score');
<<<<<<< HEAD
<<<<<<< HEAD
					    var bar = document.getElementById('barWidth');

					    var swearDiv = document.getElementById('swear');

=======
					    var bar = document.getElementById('barWidth');

>>>>>>> 68b6574... push progress bar of sentiment percentage
					    //Range from 0 to 2
					    var percentValue = Math.floor((score + 1)/2 * 100)
					    console.log(percentValue)

					    //$(bar).css( "width", percentValue + "%" );

					    $(bar).animate({
							   	width: percentValue + "%"
							  }, 1000, function() {
						    // Animation complete.
						  });

<<<<<<< HEAD

					    	var swearCount = 0;
							for (var i = 0 ; i < swearList.length; i++){
								if ((text.innerHTML).indexOf(swearList[i]) != -1){
									swearCount++;
								}
							}


					    scoreDiv.innerHTML = '' +'<cocks id="sentimentText">Sentiment:</cocks><br>'+ percentValue + '%'
					    swearDiv.innerHTML = '' + 'Swear Count: ' + swearCount




=======
					    scoreDiv.innerHTML = score;
>>>>>>> af10ba4... push all works in few hours to homeee boiizz skillt
=======
					    scoreDiv.innerHTML = '' + percentValue + '%';
>>>>>>> 68b6574... push progress bar of sentiment percentage
			    }
			});
		});
	});
}
<<<<<<< HEAD











=======
>>>>>>> af10ba4... push all works in few hours to homeee boiizz skillt
