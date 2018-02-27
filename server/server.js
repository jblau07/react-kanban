const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const apiRoute = require('./db/routes/api');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('smoke test');
})

app.use('/api/kanban', apiRoute);

// app.get('/*', (req, res) => {
//   let options = {
//     root: __dirname + '/public'
//   };
//   res.sendFile('index.html', options);
// })

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
})