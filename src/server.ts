import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ hello: "Websocket" });
})

app.listen(3333, () => console.log("Server is runnig..."));