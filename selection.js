<<<<<<< HEAD

chrome.extension.onMessage.addListener(function(request,sender,sendResponse){
	if (request.method && request.method == "getSelection")
	{
		var ourString = document.getSelection().toString();

		var arrayText = ourString.toString().split(' ');


		if (arrayText.length > 40){
			ourString = ''
			for (var i = 0; i < 40; i++){
				ourString += arrayText[i] + " ";
			}
		}


		var regexp = new RegExp('#([^\\s]*)','g');
		var postText = ourString.replace(regexp, '');

		


		//console.log(window.getSelection().toString());
		sendResponse({data:postText});
	}
	else{
		sendResponse({data:"Nothing highlighted."});
=======
chrome.extension.onMessage.addListener(function(request,sender,sendResponse){
	if (request.method && request.method == "getSelection")
	{

		console.log(window.getSelection().toString());
		sendResponse({data:window.getSelection().toString()});
		//console.log({data:window.getSelection().toString()});
		//sendResponse({data: "cocks"});
	}
	else{
		sendResponse({});
>>>>>>> af10ba4... push all works in few hours to homeee boiizz skillt
	}
});
