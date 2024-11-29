"use strict";

import { Server } from "socket.io";

const server = new Server({
	cors: {
		origin: "*", // İzin verilen origin (istemci URL'si)
		methods: ["GET", "POST", "DELETE", "PATCH", "PUT"],        // İzin verilen HTTP metodları
		allowedHeaders: ["token"], // İzin verilen özel header'lar
		credentials: true               // Credential bilgilerini iletmeye izin ver
	}
});

server.on("connection", (socket) => {

	console.log("-> A client connected.");

	socket.on("disconnect", (reason) => {
		console.log("<- A client disconnected.");
	});

});

export default server;