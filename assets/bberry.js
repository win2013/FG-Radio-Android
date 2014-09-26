  // Call onDeviceReady when PhoneGap is loaded.
    //
    function onLoad() {
      // BlackBerry OS 4 browser does not support events.
      // So, manually wait until PhoneGap is available.
      //
      var intervalID = window.setInterval(
        function() {
          if (PhoneGap.available) {
            window.clearInterval(intervalID);
            onDeviceReady();
          }
        },
        500
      );
    }

    // PhoneGap is loaded and it is now safe to make calls PhoneGap methods
    //
    function onDeviceReady() {
       document.getElementById('phonegapState').innerHTML = 'loaded and ready to rock';
    }

    // XHR GET Request
    //
    function get( url) {
      var requestCallback = function(response) {
        // response value: { 'name': 'Mikey' }
        //
        alert('Name is ' + response['name']);
      };

      navigator.network.XHR(url, null, requestCallback);
    }

    // XHR POST Request
    // (This code does not work)
    //
    function post(url) {
      var requestCallback = function(response) {
        alert('Place is ' + response['place']);
      };

      navigator.network.XHR(url, 'place=Germany', requestCallback);
    }




