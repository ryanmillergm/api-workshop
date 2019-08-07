let mongoose = require('mongoose')

// const server = ''
// const database = 'express-practice'
const username = 'riseabove2_2'
const password = 'wn1wGB1m7HWlq5i9'

mongoose.connect(`mongodb+srv://${username}:${password}@express-practice-ll9xu.mongodb.net/test?retryWrites=true&w=majority`)

let CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('Customer', CustomerSchema)

// const MongoClient = require(‘mongodb’).MongoClient;
// const uri = "mongodb+srv://riseabove2_2:wn1wGB1m7HWlq5i9@express-practice-ll9xu.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
