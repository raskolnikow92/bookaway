const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})

let db;
async function connectToDB() {
    try{
        if(db){
            return db;
        }
        await client.connect();
        await client.db("admin").command({ping:1});
        console.log(
            "Successfully connected"
        );
        db = client.db("bookaway")
    }catch(err){
        console.error(err)
        process.exit(1);
    }
}



module.exports = { connectToDB }