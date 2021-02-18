  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {      
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
        // Registration was successful
        console.log('sw.js ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('sw.js ServiceWorker registration failed: ', err);
      });
    });
    window.addEventListener('fetch', function (event) {
      // it can be empty if you just want to get rid of that error
      console.log('sw.js fetch service worker action');

  });
  }