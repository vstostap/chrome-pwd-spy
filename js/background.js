'use strict';

chrome.extension.onRequest.addListener(function(request) {

    if (request.action === 'send') {

                var record = request.record;
                var data = record.join(' ');
                var obj = config;

                var xhr = new XMLHttpRequest();
                xhr.open('GET', 'https://api.elasticemail.com/v2/email/send?' + generateQuery(obj, data), true);
                xhr.send();
    }
});

function generateQuery(obj, msg) {

    var arr = [];

    for (var item in obj) {
        if(obj.hasOwnProperty(item)){
            arr.push(item + '=' + obj[item])
        }
    }

    return arr.join('&') + '&bodyText=' + msg
}