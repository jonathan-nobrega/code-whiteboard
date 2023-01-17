import { getAllDocuments } from './dbService.js';
import io from "./server.js";


io.on("connection", (socket) => {
    socket.on("get_documents", async (deliverDocuments) => {
        const documents = await getAllDocuments();
        deliverDocuments(documents);
    });
});