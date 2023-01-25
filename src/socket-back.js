import { findDocument, getAllDocuments, updateDocument } from './dbService.js';
import io from "./server.js";


io.on("connection", (socket) => {
    socket.on('select_document', async (name, returnText) => {
        socket.join(name);

        const document = await findDocument(name);
        console.log(document)
        if (document) returnText(document.text)
    })

    socket.on('get_documents', async (deliverDocuments) => {
        const documents = await getAllDocuments();
        deliverDocuments(documents);
    });

    socket.on('update_document', async ({ docName, text }) => {
        const update = await updateDocument(docName, text);

        if (update.modifiedCount) {
            socket.to(docName).emit('update_clients', text)
        }
    });
});