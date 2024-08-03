const express = require('express');
const cors = require('cors');
const { v4: uuid } = require('uuid');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'
}))

let todos = [
  {
    _id: "5db1a22b-6410-4e4e-bc34-3814a7cd92e7",
    title: "Todo list item 1",
    description: "Describes todo list item 1",
    completed: false,
  },
  {
    _id: "dd6d2638-283f-429c-b84a-c009fd8a34d3",
    title: "Big item 2222",
    description: "Describes Big item 2222",
    completed: false,
  },
  {
    _id: "056d9753-1e6b-4afe-b242-375393509978",
    title: "3 bringing up the rear",
    description: "Describes 3 bringing up the rear",
    completed: true,
  },
];

app.get('/', (req, res) => {
  res.status(200).send('Yeah we here and working');
});

app.get('/api/todos', (req, res) => {
  console.log(`Someone wants some todos...`);
  res.status(200).json(todos);
});

app.post('/api/todos', (req, res) => {
  console.log(`posting to ${JSON.stringify(req.body)}`);
  try {
    let todo = req.body;
    todo._id = uuid();
    todos.push(req.body);
    res.status(200).send('Success');
  } catch {
    res.status(500).send('Failure');;
  }
});

app.put('/api/todos', (req, res) => {
  console.log(`putting to ${JSON.stringify(req.body)}`);
  try {
    let todo = req.body;
    const idx = todos.findIndex((item) => item._id === todo._id);
    if (idx !== -1) {
      todos[idx] = todo;
      res.status(200).send('Success');
    } else {
      res.status(404).send('Todo does not exist');
    }
  } catch (e) {
    res.status(500).send(`FAILURE: ${e}`)
  }
})

// start the server on the port with 'node .'
app.listen(PORT, () => {
  console.log(`Yo bitches we're live at ${PORT}`);
});