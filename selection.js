chrome.extension.onMessage.addListener(function(request,sender,sendResponse){
	if (request.method && request.method == "getSelection")
	{
		var ourString = window.getSelection().toString();
		var regexp = new RegExp('#([^\\s]*)','g');
		var postText = ourString.replace(regexp, '');


		console.log(window.getSelection().toString());
		sendResponse({data:postText});
	}
	else{
		sendResponse({data:"Nothing highlighted."});
	}
});
