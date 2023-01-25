const route = require("./route.js");
const apiRoute = require("./api.js");

const server = require("./server");

server.use(route);
server.use(apiRoute);

server.start();
