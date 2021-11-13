import express from 'express';
// import main from'../src/App.js';

const app = express();

const port = 3001

app.get('/', (req, res) => {
  res.send('main')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})