import { insertDocumentsLinks } from "./index.js";

const socket = io();

socket.emit("get_documents", (documents) => {
  documents.forEach((documento) => {
    insertDocumentsLinks(documento.name);
  });
});

// function emitirAdicionarDocumento(nome) {
//   socket.emit("adicionar_documento", nome);
// }

// socket.on("adicionar_documento_interface", (nome) => {
//   inserirLinkDocumento(nome);
// });

// socket.on("documento_existente", (nome) => {
//   alert(`O documento ${nome} já existe!`);
// });

// socket.on("excluir_documento_sucesso", (nome) => {
//   removerLinkDocumento(nome);
// });

// export { emitirAdicionarDocumento };
