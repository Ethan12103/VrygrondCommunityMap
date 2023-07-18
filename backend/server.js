// Name: Bailey Ballard
// University of Florida
// Date: 7/15/2023
// Description: Script for receiving data from the front end react.js application and running
// search query based on that result and returning the data
// See results printed to http://localhost:4000/

const { MongoClient } = require("mongodb");
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const port = 4000;

// Add body-parser middleware to parse incoming request bodies
app.use(express.text());

async function ConnectToDatabase() {
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
        const stringInput = req.body;

        // Process the received string input as needed
        try {
            // Set namespace
            const database = client.db("OrganizationList");
            const coll = database.collection("Information");
            // Define pipeline
            const agg = [
                // The string next to "query" needs to be input from the user
                { $search: { text: { query: stringInput, path: ["Name", "Services"] } } },
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
                //console.log(results);
            }
            else {
                console.log("NONE");
            }
            // Optionally, send a response back
            res.send('String input received successfully');
            res.send(results);

        }

        catch (err) {
            console.log("Error writing to file", err)
        }

        finally {
            await client.close();
        }

    });
}

ConnectToDatabase();

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});