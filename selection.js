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
	}
});
