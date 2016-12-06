/**
 * Created by stephenraghunath on 12/6/16.
 */
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('dist'));

io.on('connection', function(socket) {
  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
  });
});

http.listen(process.env.PORT || 3000, function() {
  console.log('listening on *:3000');
});