import { emitDocumentUpdate, selectDocument } from './socket-front.js';

const params = new URLSearchParams(window.location.search);
const pathName = params.get("name");

const documentName = document.getElementById('document-name');
const documentsList = document.getElementById('documents-list');
const textEditor = document.getElementById('text-editor');
const highlightingContent = document.getElementById('highlighting-content');

documentName.textContent = pathName ? `${pathName} Room` : 'Uknown Room';

selectDocument(pathName);
hljs.highlightAll();

textEditor.addEventListener('keydown', (e) => {
    console.log(e.key);
    if (e.key === 'Tab') {
        e.preventDefault();
        // textEditor.focus();
        textEditor.setRangeText(
            '    ',
            textEditor.selectionStart,
            textEditor.selectionStart,
            'end'
        );
    }
});
textEditor.addEventListener('keyup', (e) => {
    updateTextEditor(textEditor.value);
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
    highlightingContent.innerText = text;
    textEditor.innerHTML = text.replace(new RegExp("&", "g"), "&").replace(new RegExp("<", "g"), "<");
    highlightingContent.innerHTML = text.replace(new RegExp("&", "g"), "&").replace(new RegExp("<", "g"), "<");
    hljs.highlightAll();
}

