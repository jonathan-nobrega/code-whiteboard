import { MongoClient } from "mongodb";

const cliente = new MongoClient(
  "mongodb+srv://dbAdmin:Atlas123@cluster0.fjgip.mongodb.net/?retryWrites=true&w=majority"
);

let docsCollection;

try {
  await cliente.connect();

  const db = cliente.db("whiteboard-rooms");
  docsCollection = db.collection("docs");

  console.log("Successfully connected to the database!");
} catch (erro) {
  console.log(erro);
}

export { docsCollection };
