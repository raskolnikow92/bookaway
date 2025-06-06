export function connectToDB(){
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("✅ Mit MongoDB verbunden");
    }).catch(err => {
        console.error("❌ Mongo-Verbindungsfehler:", err);
    });
}
