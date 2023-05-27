import mongoose from "mongoose";

interface Connection {
  isConnected?: boolean;
}

const connection: Connection = {};

export async function connectDb() {
  if (connection.isConnected) {
    console.error("Already connected to the database");
    return;
  }

  if (mongoose.connections.length > 0) {
    connection.isConnected = Boolean(mongoose.connections[0].readyState);

    if (connection.isConnected) {
      console.warn("Using the previous connection to the database");
      return;
    }

    await mongoose.disconnect();
  }

  const db = await mongoose.connect(String(process.env.MONGODB_URL));
  console.log("Connection to the database established");
  connection.isConnected = Boolean(db.connections[0].readyState);
}

export async function disconnectDb() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV !== "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("cannot disconnect from the database");
    }
  }
}

const db = { connectDb, disconnectDb };
export default db;
