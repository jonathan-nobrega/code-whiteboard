import { emitDocumentUpdate, selectDocument } from './socket-front.js';

const params = new URLSearchParams(window.location.search);
const pathName = params.get("name");

const documentName = document.getElementById('document-name');
const documentsList = document.getElementById('documents-list');
const textEditor = document.getElementById('text-editor');

documentName.textContent = pathName ? `${pathName} Room` : 'Uknown Room'

selectDocument(pathName)

textEditor.addEventListener('keyup', () => {
    emitDocumentUpdate({
        docName: pathName,
        text: textEditor.value
    });
});

export function insertDocumentsLinks(name) {
    documentsList.innerHTML += `
        <li class="list-none py-3 px-10 my-auto h-14 m-auto border-t-2 last:border-b-2 border-gray-100 hover:bg-gray-100 cursor-pointer">
            <p class="my-auto"><a href="?name=${name}">${name}</a></p>
        </li>
    `;
}

export function updateTextEditor(text) {
    console.log('ping', text)
    textEditor.value = text
}
