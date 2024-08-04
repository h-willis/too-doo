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

todos = [{ "title": "todo 1", "description": "wadswa", "completed": false, "dateCreated": "2024-08-04T01:15:08.143Z", "_id": "bcab9bfc-cdd2-4907-9ac0-564135432d74" }, { "title": "2do2", "description": "sadwaaaassd", "completed": false, "dateCreated": "2024-08-04T01:15:12.875Z", "_id": "e82f27fc-ce27-4eb0-b59f-6f7479c662b3" }, { "title": "33333333333333333333333", "description": "", "completed": false, "dateCreated": "2024-08-04T01:15:15.374Z", "_id": "555ffad8-96fd-40bf-8250-36176c940b49" }];

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

// THIS IS NOTTTTT SAFE AT ALL
app.delete('/api/todos/:id', (req, res) => {
  console.log(`whatchu tryin' to delete?`);
  const todoId = req.params.id;

  const idxToDelete = todos.findIndex((todo) => todo._id === todoId);

  if (idxToDelete === -1) {
    res.status(404).send('Todo does not exist');
    return;
  }

  // delete 1 index starting from idxTdDelete
  todos.splice(idxToDelete, 1);
  res.status(200).send('Success');
})

// start the server on the port with 'node .'
app.listen(PORT, () => {
  console.log(`Yo bitches we're live at ${PORT}`);
});