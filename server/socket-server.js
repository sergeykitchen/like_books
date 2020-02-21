var io = require("socket.io");
const socketServer = io.listen(8001);

socketServer.on("connection", function(socket) {
  console.log("CONNECTED");
  socket.on("disconnect", function() {
    console.log("DISCONNECTED");
    socket.emit("user disconnected");
  });
});

module.exports = socketServer;
