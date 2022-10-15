import { io } from "../http/http";

io.on("connect", socket => {
  socket.emit("init", {
    message: "chat initalized.."
  })
});