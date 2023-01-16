import { getAllDocuments } from './dbService.js';
import io from "./server.js";

console.log('aqui')

io.on("connection", (socket) => {
    console.log('no socket-back')
    socket.on("get_documents", async (deliverDocuments) => {
        console.log('no socket-back')
        const documents = await getAllDocuments();
        deliverDocuments(documents);
    });
});