

const { MongoClient } = require("mongodb");
const express = require("express");
const app = express();
const fs = require('fs');

// Add body-parser middleware to parse incoming request bodies
app.use(express.text());

const uri = "mongodb+srv://VrygrondTrust:ButterflyArtsProject@vrygrondcommunity.donyn7r.mongodb.net/";
const client = new MongoClient(uri);

async function ReturnAllOrgNames() {
    await client.connect();
    console.log("CLIENT Connected");
    // Set namespace
    const database = client.db("OrganizationList");
    const coll = database.collection("Information");

    // Projection to include only the 'Name' field and exclude '_id' field
    const projection = { "Name": 1 , _id: 0};

    // Find all documents in the collection with the specified projection
    const cursor = coll.find({}, projection);

    // Convert the cursor to an array of documents
    const results = await cursor.toArray();

    const namesArray = results.map((doc) => doc.Name);

    // Write to file
    try {
        fs.writeFileSync("../frontend/src/components/Data/FullOrgNameList.json", JSON.stringify(namesArray));
        console.log("Done writing to file");
    }
    catch(err) {
        console.log("Error writing to file", err)
    }
    client.close();
}

ReturnAllOrgNames();