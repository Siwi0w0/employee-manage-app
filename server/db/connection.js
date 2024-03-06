import { MongoClient, ServerApiVersion } from "mongodb";

const defaultUri = "mongodb://localhost:27017/mydatabase"; // Provide a default connection string

const uri = "mongodb+srv://user2:kN0oZqHDDZDrFt3b@cluster0.vyxp9s2.mongodb.net/?retryWrites=true&w=majority&appName=cluster0" || defaultUri;

console.log(uri);

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log(
   "Pinged your deployment. You successfully connected to MongoDB!"
  );
} catch(err) {
  console.error(err);
}

let db = client.db("employees");

export default db;