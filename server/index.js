import http from "http";
import express from "express";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
<<<<<<< HEAD
  res.send("Server is up & running!");
=======
  res.send("Server is up and running!");
>>>>>>> 2aebaa9ec1eab1c334efa0c27d145bfcdd750672
});

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("Someone connected! 😈", socket.id);

  socket.on("emoji", (data) => {
    socket.broadcast.emit("new_emoji", data);
    // socket.broadcast.emit (only leaving the one that sent)
    // io.emit (send to everyone)
    // socket.emit (to send back to the one that started)
  });
});

server.listen(8000, () => {
  console.log(`Server started, listening on port 8000!`);
});
