import { insertDocumentsLinks, updateTextEditor } from "./index.js";

const socket = io();

socket.emit("get_documents", (documents) => {
  documents.forEach((documento) => {
    insertDocumentsLinks(documento.name);
  });
});

socket.on('update_clients', (updatedText) => {
  updateTextEditor(updatedText)
})

export const selectDocument = (name) => {
  socket.emit('select_document', name, (text) => {
    updateTextEditor(text)
  })
}

export const emitDocumentUpdate = (data) => {
  socket.emit('update_document', data);
}
