/* 
    Name: Bailey Ballard
    University of Florida
    Date: 7/19/2023

    This file has 2 functions

    1. SearchByName() 
    Connects to a MongoDB Atlas Cluster, performs a query serach based on string input from the 
    front-end react.js application, and returns the JSON string results to the specified port
    Commented out right now - Writes the JSON string to "SearchedNames.json" located in the 
    frontend/src/components/ file path

    2. SearchByService() 
    Same function as SearchByName but performs a query seach on the services category of 
    the MongoDB Atlas Cluster.
    Commented out right now - Writes the JSON string to "SearchedServices.json" located in the 
    frontend/src/components/ file path

    See results printed to http://localhost:8000/

*/

const { MongoClient } = require("mongodb");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
const fs = require('fs');
app.use(cors());

// Add body-parser middleware to parse incoming request bodies
app.use(express.json());

const uri = "mongodb+srv://VrygrondTrust:ButterflyArtsProject@vrygrondcommunity.donyn7r.mongodb.net/";
const client = new MongoClient(uri);

async function main() {
    // Connect to MongoDB Atlas
    await client.connect();
    console.log("Connected successfully to server");
    let latestResults = null;

    // Define a route that will handle incoming requests
    app.post('/searchByName', async (req, res) => {
        // Handle the incoming request and extract the string input
        console.log(req.body.organization);
        const stringInput = req.body.organization;

        // Process the received string input as needed

        // Set namespace
        const database = client.db("OrganizationList");
        const coll = database.collection("Information");
        // Define pipeline
        const agg = [
            // The string next to "query" needs to be input from the user
            {
                $match: { Name: stringInput, },
            },
            {
                $project: {
                    _id: 0, Name: 1, "Address 1": 1, "Address 2": 1, "Contact Number 1": 1,
                    "Contact Number 2": 1, "Contact Persons": 1, "Email Address 1": 1, "Email Address 2": 1, Website: 1,
                    Latitude: 1, Longitude: 1
                }
            }

        ];
        // Run pipeline
        let cursor = coll.aggregate(agg);

        const resultArray = [];
        
        while (await cursor.hasNext()) {
            const document = await cursor.next();
            resultArray.push(document);
        }

        latestResults = resultArray;

        const results = JSON.stringify(latestResults);

        // Create loop to index through each object element to remove "Organisation"
        if (results.length > 0) {
            console.log("Sending results to port 8000");
        }
        else {
            console.log("No matches found");
        }
        // Send the full JSON list back filtered by search query
        res.json(results);
        // Write to file
        /*
        try {
            fs.writeFileSync("../frontend/src/components/SearchedNames.json", results);
            console.log("Done writing to file");
        }
        catch(err) {
            console.log("Error writing to file", err)
        }
        */
    });
    
    app.post('/searchByService', async (req, res) => {
        // Handle the incoming request and extract the string input
        const stringInput = req.body.organization;

        // Process the received string input as needed

        // Set namespace
        const database = client.db("OrganizationList");
        const coll = database.collection("Information");
        // Define pipeline
        const agg = [
            // The string next to "query" needs to be input from the user
            { $search: { text: { query: stringInput, path: "Services" } } },
            {
                $project: {
                    _id: 0, Name: 1, "Address 1": 1, "Address 2": 1, "Contact Number 1": 1,
                    "Contact Number 2": 1, "Contact Persons": 1, "Email Address 1": 1, "Email Address 2": 1, Website: 1,
                    Latitude: 1, Longitude: 1
                }
            }
        ];

        // Run pipeline
        let cursor = coll.aggregate(agg);

        const resultArray = [];
        
        while (await cursor.hasNext()) {
            const document = await cursor.next();
            const documentArray = Object.values(document);
            resultArray.push(documentArray);
        }

        const results = JSON.stringify(resultArray);

        if (results.length > 0) {
            console.log("Sending results to port 8000");
        }
        else {
            console.log("No matches found");
        }
        // Optionally, send a response back

        // Write to file
        /*
        try {
            fs.writeFileSync("../frontend/src/components/SearchedServices.json", results);
            console.log("Done writing to file");
        }
        catch(err) {
            console.log("Error writing to file", err)
        }
        */

        // Send the full JSON list back filtered by search query
        res.json(results);

    });
    app.get('/', (req, res) => {
        if (latestResults) {
            res.json(latestResults);
        } else {
            res.send("No results yet");
        }
    });
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
}


main().catch(console.error);