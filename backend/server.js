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

// Add body-parser middleware to parse incoming request bodies
app.use(express.text());

async function SearchByName() {
    // Connect to MongoDB Atlas
    mongoose.connect('mongodb+srv://VrygrondTrust:ButterflyArtsProject@vrygrondcommunity.donyn7r.mongodb.net/', 
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB Atlas');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB Atlas:', error);
    });

    // Define a route that will handle incoming requests
    app.post('/data', async (req, res) => {
        // Handle the incoming request and extract the string input
        //const stringInput = req.body;

        // Process the received string input as needed
        try {
            // Set namespace
            const database = client.db("OrganizationList");
            const coll = database.collection("Information");
            // Define pipeline
            const agg = [
                // The string next to "query" needs to be input from the user
                {$search: { text: {query: "school", path: "Name" }}},
                {$project: {_id: 0, Name: 1, "Address 1": 1, "Address 2": 1, "Contact Number 1": 1, 
                "Contact Number 2": 1, "Contact Persons": 1, "Email Address 1": 1, "Email Address 2": 1, Website: 1}}
            ];
            // Run pipeline
            let cursor = coll.aggregate(agg);

            const resultArray = [];
           
            try {
                while (await cursor.hasNext()) {
                    const document = await cursor.next();
                    const documentArray = Object.values(document);
                    resultArray.push(documentArray);
                }

            } catch (err) {
                console.error('Error iterating through the cursor:', err);
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

        }

        catch(err) {
            console.log("Error writing to file", err)
        } 
            
        finally {
            await client.close();

            // Write to file
            try {
                fs.writeFileSync("/frontend/components/out_file.json", results);
                console.log("Done writing to file");
            }
            catch(err) {
                console.log("Error writing to file", err)
            }

        }  
            
    });
}

async function SearchByService() {
    // Connect to MongoDB Atlas
    mongoose.connect('mongodb+srv://VrygrondTrust:ButterflyArtsProject@vrygrondcommunity.donyn7r.mongodb.net/', 
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB Atlas');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB Atlas:', error);
    });

    // Define a route that will handle incoming requests
    app.post('/data', async (req, res) => {
        // Handle the incoming request and extract the string input
        //const stringInput = req.body;
        console.log("HERE");
        // Process the received string input as needed
        try {
            // Set namespace
            const database = client.db("OrganizationList");
            const coll = database.collection("Information");
            // Define pipeline
            const agg = [
                // The string next to "query" needs to be input from the user
                {$search: { text: {query: "school", path: "Services" }}},
                {$project: {_id: 0, Name: 1, "Address 1": 1, "Address 2": 1, "Contact Number 1": 1, 
                "Contact Number 2": 1, "Contact Persons": 1, "Email Address 1": 1, "Email Address 2": 1, Website: 1}}
            ];
            // Run pipeline
            let cursor = coll.aggregate(agg);
            console.log("Serach Completed");
            const resultArray = [];

            try {
                while (await cursor.hasNext()) {
                    const document = await cursor.next();
                    const documentArray = Object.values(document);
                    resultArray.push(documentArray);
                }

            } catch (err) {
                console.error('Error iterating through the cursor:', err);
            }

            const results = JSON.stringify(resultArray);

            // Create loop to index through each object element to remove "Organisation"
            if (results.length > 0) {
                console.log("FOUND");
            }
            else {
                console.log("NONE");
            } 

        }

        catch(err) {
            console.log("Error writing to file", err)
        } 
            
        finally {
            await client.close(); 

            // Write to file
            try {
                fs.writeFileSync("/frontend/components/out_file.json", results);
                console.log("Done writing to file");
            }
            catch(err) {
                console.log("Error writing to file", err)
            }
        }
            
    });
}
/*
async function write_JSON () {
    await client.connect();

    console.log("Connected successfully to server");
    const db = client.db("OrganizationList");

    const query = { };  // A blank query returns all of the collections
    
    const db_array = await db.collection("Information").find(query).toArray();
    
    // Write to file
    try {
        fs.writeFileSync("out_file.json", JSON.stringify(db_array));
        console.log("Done writing to file");
    }
    catch(err) {
        console.log("Error writing to file", err)
    }
};
*/
//SearchByName();

SearchByService();

//write_JSON();
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
