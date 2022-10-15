const socket = io("http://localhost:3333");

socket.on("init", data => {
  console.log(data);
});