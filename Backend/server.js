import http from "http";
import app from "./app.js";

const server  = http.createServer(app);

const port = process.env.port || 8000;

server.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
