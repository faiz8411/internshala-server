const express = require('express')
const app = express()
const cors = require("cors")
const ObjectId = require("mongodb").ObjectId
const { MongoClient } = require('mongodb');
require('dotenv').config()
const port = process.env.PORT || 5000
app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wusl0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
console.log(uri)

async function run() {
    try {
        await client.connect()
        console.log('data connect')
        const database = client.db("internshala")
        const dataCollection = database.collection("data")

    } finally {
        // await client.close()
    }

}
run().catch(console.dir)
app.get('/', (req, res) => {
    res.send('Hello internshala!')
})

app.listen(port, () => {
    console.log(` listening at ${port}`)
})