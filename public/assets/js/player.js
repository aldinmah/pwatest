
const manifestUri = 'https://172.104.156.57:4043/origin/cmaf/index.m3u8';

var player, video = null;

function initApp() {
  // Install built-in polyfills to patch browser incompatibilities.
  shaka.polyfill.installAll();

  // Check to see if the browser supports the basic APIs Shaka needs.
  if (shaka.Player.isBrowserSupported()) {
    // Everything looks good!
    initPlayer();
  } else {
    // This browser does not have the minimum set of APIs we need.
    console.error('Browser not supported!');
  }
}

async function initPlayer() {
  // Create a Player instance.
  video = document.getElementById('video');
  player = new shaka.Player(video);
  shaka.log.setLevel(shaka.log.Level.DEBUG);
  // Attach player to the window to make it easy to access in the JS console.
  window.player = player;

  // Listen for error events.
  player.addEventListener('error', onErrorEvent);

  // Try to load a manifest.
  // This is an asynchronous process.
  try {
    await player.load(manifestUri);
    // This runs if the asynchronous load is successful.
    $('.logBox').append('<span class="w-100 d-inline-block">The video has now been loaded! URL : , '+manifestUri+'</span>')

    console.log('The video has now been loaded!');
  } catch (e) {
    // onError is executed if the asynchronous load fails.
    onError(e);
  }
}

function onErrorEvent(event) {
  // Extract the shaka.util.Error object from the event.
  onError(event.detail);
}

function onError(error) {
  // Log the error.
  console.error('Error code', error.code, 'object', error);
  $('.logBox').append('<span class="w-100 d-inline-block error">Error code, '+error.code+', object, '+error+'</span>')
}

function changeStream() {
  var streamUrl = document.getElementById("stream").value;
  $('#selectedStream').text(streamUrl)
  $('.logBox').append('<span class="w-100 d-inline-block">Playing URL : , '+streamUrl+'</span>')

  player.load(streamUrl);
}

document.addEventListener('DOMContentLoaded', initApp);