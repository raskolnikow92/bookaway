require('dotenv').config();
const { connectToDB } = require("../db/Connection");
const fs = require('fs');
const path = require('path');


async function fillDatabase(){

    console.log('in der function fillDatabase');
    try{
        const db = await connectToDB();
        const collection = db.collection("books");
        const filePath = path.join(__dirname, 'books_for_mongodb.json');
        const booksData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        const result = await collection.insertMany(booksData);
        const all = await collection.updateMany({}, {$set:{"amount":1}})
        console.log (`Es wurden ${result.insertedCount} Bücher importiert!`)
    }catch(err){
        console.log(err);
    }
}

fillDatabase();