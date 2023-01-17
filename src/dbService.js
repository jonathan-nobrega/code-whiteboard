import { docsCollection } from "./dbConnect.js";

function getAllDocuments() {
  const result = docsCollection.find().toArray();
  return result;
}

export { getAllDocuments };
