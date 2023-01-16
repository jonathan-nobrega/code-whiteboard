import { docsCollection } from "./dbConnect.js";

function getAllDocuments() {
  const result = docsCollection.find().toArray();
  console.log(123)
  return result;
}

export { getAllDocuments };
