
chrome.extension.onMessage.addListener(function(request,sender,sendResponse){
	if (request.method && request.method == "getSelection")
	{
		var ourString = window.getSelection().toString();

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
	}
});
