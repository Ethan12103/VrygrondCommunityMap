// Name: Bailey Ballard
// University of Florida
// Date: 7/11/2023
// Description: A javascript file using Node, Express, and MongoDB Atlas
// Connects to a MongoDB Atlas cluster, defines a search query, returns all of the
// mathcing organization names as an object, prints it to the corresponding port
// Additionally it creates a JSON file of all of the organization information
// See results printed to http://localhost:8000/

const { MongoClient } = require("mongodb");
const express = require("express");
const app = express();
const fs = require('fs');
const cors = require('cors');
app.use(cors());

// Connect to your Atlas clusterv
const uri = "mongodb+srv://VrygrondTrust:ButterflyArtsProject@vrygrondcommunity.donyn7r.mongodb.net/";
const client = new MongoClient(uri);

async function run() {
    try {
        // Set namespace
        const database = client.db("OrganizationList");
        const coll = database.collection("Information");
        // Define pipeline
        const agg = [
            // The string next to "query" needs to be input from the user
            { $search: { text: { query: "school", path: ["Name", "Services"] } } },
            {
                $project: {
                    _id: 0, Name: 1, Services: 1, "Address 1": 1, "Address 2": 1, "Contact Number 1": 1,
                    "Contact Number 2": 1, "Contact Persons": 1, "Email Address 1": 1, "Email Address 2": 1, Website: 1
                }
            }
        ];

        // Run pipeline
        let cursor = coll.aggregate(agg);

        const resultArray = [];

        try {
            while (await cursor.hasNext()) {
                const document = await cursor.next();
                const documentArray = Object.entries(document);
                resultArray.push(documentArray);
            }

        } catch (err) {
            console.error('Error iterating through the cursor:', err);
        }

        const results = JSON.stringify(resultArray);

        // Create loop to index through each object element to remove "Organisation"
        if (results.length > 0) {
            console.log("FOUND");
            // Comment or uncomment next line of code as needed
            console.log(results);
        }
        else {
            console.log("NONE");
        }

        app.get("/", (req, res) => {
            res.send(results);
        });

        const PORT = process.env.PORT || 8000;

        app.listen(PORT, console.log(`Server started on port ${PORT}`));

    } finally {
        await client.close();
        console.log("Connection Closed");
    }

}

async function write_JSON() {
    await client.connect();

    console.log("Connected successfully to server");
    const db = client.db("OrganizationList");

    const query = {};  // A blank query returns all of the collections

    const db_array = await db.collection("Information").find(query).toArray();

    // Write to file
    try {
        fs.writeFileSync("out_file.json", JSON.stringify(db_array, null, 2));
        console.log("Done writing to file");
    }
    catch (err) {
        console.log("Error writing to file", err)
    }
};

write_JSON();
run().catch(console.dir);
