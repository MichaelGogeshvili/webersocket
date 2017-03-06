var sys = require('sys');
var WebSocket = require('websocket').WebSocket;
var ws = new WebSocket('ws://localhost:8000/biff', 'borf');

ws.addListener('data', function(buf) {
    sys.debug('Got data: ' + sys.inspect(buf));
});
ws.onmessage = function(m) {
    sys.debug('Got message: ' + m);
}

//https://www.npmjs.com/package/websocket-client
//https://www.npmjs.com/package/mongoose
//