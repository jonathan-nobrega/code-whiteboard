import { docsCollection } from "./dbConnect.js";

export function findDocument(name) {
  const result = docsCollection.findOne({ name });
  return result;
}

export function getAllDocuments() {
  const result = docsCollection.find().toArray();
  return result;
}

export function updateDocument(name, text) {
  const result = docsCollection.updateOne(
    { name },
    { $set: { text } }
  );
  return result;
}
