import { MongoClient } from "mongodb";

require("dotenv").config();

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    const {
      DB_USERNAME,
      DB_PASSWORD,
      DB_NAME,
      MESSAGE_COLLECTION,
    } = process.env;

    const connectionString = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.dufywdu.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

    let client;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: error });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection(MESSAGE_COLLECTION).insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      await client.close();
      res.status(500).json({ message: error });
      return;
    }

    await client.close();

    res.status(201).json({ message: newMessage });
  }
};

export default handler;
