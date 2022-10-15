import express from "express";
import path from "path";

import { createServer } from "http";
import { Server } from "socket.io";

const app = express();

const server = createServer(app);

app.use(express.static(path.join(__dirname, "..", "..", "..", "..", "public")));
app.use(express.json());

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("Socket", socket.id);
})

app.get("/", (req, res) => {
  return res.json({ hello: "Websocket" });
})

export { server, io };