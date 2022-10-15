import { server } from "./http";

import "../websocket/websocket-service"

server.listen(3333, () => console.log("Server is running..."));