const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const { v4: uuid } = require('uuid');
const app = express();
const PORT = 5000;

const { todos } = require('./todos.js');

const DBNAME = 'tododb';
const COLLECTION = 'todoCollection';

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'
}))

// THIS IS THE NAME OF THE CONTAINER NETWORK WERE AIMING FOR eg mongodb://mongo:27017
const uri = process.env.MONGO_URI || 'mongodb://localhost:27017';
const client = new MongoClient(uri);

let connection;
let db;

// god i hate this
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function connectToDb() {
  let connected = false;
  while (!connected) {
    try {
      connection = await client.connect();
      console.log(`Connected to MongoDB`);
      db = connection.db(DBNAME);
      connected = true;
    } catch (e) {
      console.log(`Connection attempt failed: ${e}`);
      delay(500);
    }
  }
}

connectToDb();

app.get('/', (req, res) => {
  res.status(200).send('Yeah we here and working');
});

app.get('/api/todos', async (req, res) => {
  try {
    const collection = getCollection();
    const data = await collection.find().toArray();
    // console.log(`GOT SOME TODOS: ${JSON.stringify(data, null, 2)}`);
    console.log(`GOT SOME TODOS`);
    res.json(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.post('/api/todos', async (req, res) => {
  console.log(`posting to ${JSON.stringify(req.body)}`);
  try {
    let todo = req.body;
    todo._id = uuid();

    const collection = getCollection();
    const result = collection.insertOne(todo);

    res.status(201).send(`Created: ${result}`);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.put('/api/todos', async (req, res) => {
  console.log(`putting to ${JSON.stringify(req.body)}`);

  try {
    const collection = getCollection();
    const query = { _id: req.body._id };
    const updateData = req.body;

    // Update document by ID
    const result = await collection.updateOne(
      query,
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return res.status(404).send('Document not found');
    }

    res.status(200).send('Document updated successfully');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// THIS IS NOTTTTT SAFE AT ALL
app.delete('/api/todos/:id', async (req, res) => {
  console.log(`whatchu tryin' to delete?`);

  try {
    const collection = getCollection();
    const todoId = req.params.id;
    const query = { _id: todoId };

    let result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      return res.status(404).send('Document not found');
    }

    res.status(200).send('Document deleted');
  } catch (e) {
    res.status(500).send(e);
  }

});

// start the server on the port with 'node .'
app.listen(PORT, () => {
  console.log(`Yo bitches we're live at ${PORT}`);
});

function getCollection() {
  return db.collection(COLLECTION);
}