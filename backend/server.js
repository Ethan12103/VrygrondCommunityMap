// Name: Bailey Ballard
// University of Florida
// Date: 7/19/2023

// See results printed to http://localhost:8000/
// This file has 2 functions

// SearchByName: Connects to a MongoDB Atlas database, performs a query serach based on string input
// by front-end react.js application, and writes the JSON string to "output_file.json" located in the 
// frontend/components/ file path

// SearchByService: Same function as SearchByName but performs a query seach on the services category of 
// the MongoDB Atlas

const { MongoClient } = require("mongodb");
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const port = 8000;
const fs = require('fs');

// Add body-parser middleware to parse incoming request bodies
app.use(express.text());

const uri = "mongodb+srv://VrygrondTrust:ButterflyArtsProject@vrygrondcommunity.donyn7r.mongodb.net/";
const client = new MongoClient(uri);

async function SearchByName() {
    // Connect to MongoDB Atlas
    await client.connect();
    console.log("Connected successfully to server");

        
    // Define a route that will handle incoming requests
    //app.post('/data', async (req, res) => {
        // Handle the incoming request and extract the string input
        //const stringInput = req.body;

        // Process the received string input as needed

        // Set namespace
        const database = client.db("OrganizationList");
        const coll = database.collection("Information");
        // Define pipeline
        const agg = [
            // The string next to "query" needs to be input from the user
            { $search: { text: { query: "deaf", path: "Name" } } },
            {
                $project: {
                    _id: 0, Name: 1, "Address 1": 1, "Address 2": 1, "Contact Number 1": 1,
                    "Contact Number 2": 1, "Contact Persons": 1, "Email Address 1": 1, "Email Address 2": 1, Website: 1
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

        // Create loop to index through each object element to remove "Organisation"
        if (results.length > 0) {
            console.log("FOUND");
        }
        else {
            console.log("NONE");
        }
        // Optionally, send a response back
        //res.send('String input received successfully');
        //res.send(results);


        // Write to file
        try {
            fs.writeFileSync("../frontend/src/components/out_file.json", results);
            console.log("Done writing to file");
        }
        catch(err) {
            console.log("Error writing to file", err)
        }
        client.close();
    //});
}

async function SearchByService() {
    // Connect to MongoDB Atlas
    await client.connect();
    console.log("Connected successfully to server");
        
    // Define a route that will handle incoming requests
    app.post('/data', async (req, res) => {
        // Handle the incoming request and extract the string input
        const stringInput = req.body;

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
                    "Contact Number 2": 1, "Contact Persons": 1, "Email Address 1": 1, "Email Address 2": 1, Website: 1
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

        // Create loop to index through each object element to remove "Organisation"
        if (results.length > 0) {
            console.log("FOUND");
        }
        else {
            console.log("NONE");
        }
        // Optionally, send a response back

        // Write to file
        try {
            fs.writeFileSync("../frontend/src/components/out_file.json", results);
            console.log("Done writing to file");
        }
        catch(err) {
            console.log("Error writing to file", err)
        }
            
    });
};

SearchByName();

//SearchByService();
