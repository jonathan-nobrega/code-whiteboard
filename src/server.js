import express from "express";
import http from "http";
import path from "path";
import { Server } from "socket.io";
import url from "url";

import "./dbConnect.js";

const app = express();
const port = process.env.porta || 3000;

const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual, "../..", "public");
app.use(express.static('public'));


const server = http.createServer(app);

server.listen(port, () =>
console.log(`Server listening at http://localhost:${port}`)
);

const io = new Server(server);

export default io;
