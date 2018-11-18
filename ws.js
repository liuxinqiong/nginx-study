var msg = ''
console.log('server start')
var WebSocketServer = require('ws').Server
var wss = new WebSocketServer({port: 8010})
wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        consle.log('Receive from client: %s', message)
        ws.send('Server received from client' + message)
    })
})