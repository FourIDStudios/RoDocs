require('dotenv').config(); // Load environment variables from .env
const { MongoClient, ServerApiVersion } = require('mongodb');

// MongoDB connection URI using environment variables
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/?retryWrites=true&w=majority&appName=${process.env.DB_NAME}`;

// Create a MongoClient instance
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Connect function to establish the connection
async function connectDB() {
  try {
    await client.connect(); // Connect to MongoDB
    await client.db("admin").command({ ping: 1 }); // Ping to check if the connection is successful
    console.log("Successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = { connectDB, client }; // Export connectDB and client for use in other parts of the app
