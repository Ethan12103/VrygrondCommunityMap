// Name: Bailey Ballard
// University of Florida
// Date: 7/11/2023
// Description: A javascript file using Node, Express, and MongoDB Atlas
// Connects to a MongoDB Atlas cluster, defines a search query, returns all of the
// mathcing organization names as an object, prints it to the corresponding port
// See results printed to http://localhost:8000/

const { MongoClient } = require("mongodb");
const express = require("express");
const app = express();

// connect to your Atlas cluster
const uri = "mongodb+srv://VrygrondTrust:ButterflyArtsProject@vrygrondcommunity.donyn7r.mongodb.net/";
const client = new MongoClient(uri);
async function run() {
    try {
        await client.connect();
        // set namespace
        const database = client.db("OrganizationList");
        const coll = database.collection("Information");
        // define pipeline
        const agg = [
            // The string next to "query" needs to be input from the user
            {$search: { text: {query: "foundation", path: ["Catagories", "Organisation"] }}},
            {$project: {_id: 0, Organisation: 1}}
        ];
        // run pipeline
        let cursor = coll.aggregate(agg);
        const results = await cursor.toArray();
        //const results = Object.values(obj_list);
        // Create loop to index through each object element to remove "Organisation"
        //.log(cursor);
        if (results.length > 0) {
            console.log("FOUND");
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
    }
}

run().catch(console.dir);