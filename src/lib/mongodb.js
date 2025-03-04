import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("MONGODB_URI is not defined in .env");

let client;
let clientPromise;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export async function connectMongoDB() {
  try {
    const client = await clientPromise;
    const db = client.db("test");
    return db;
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
}
