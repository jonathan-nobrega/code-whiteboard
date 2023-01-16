const documentName = document.getElementById('document-name');
const documentsList = document.getElementById('documents-list');

function insertDocumentsLinks(name) {
    console.log('name', name)
    documentsList.innerHTML += `
        <div class="py-3 px-10 my-auto h-14 m-auto border-t-2 border-gray-100 hover:bg-gray-100 cursor-pointer">
            <p class="my-auto">${name}</p>
        </div>
    `;
}

export { insertDocumentsLinks };
