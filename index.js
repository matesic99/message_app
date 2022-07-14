const express = require('express');
const Datastore = require('nedb');
const app = express();
const database = new Datastore('database.db');
database.loadDatabase();

app.listen(3000, () => console.log('Server started on port 3000'));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));


app.get('/api', (req, res) => {
  database.find({}, (err, data) => {
    if (err) {
      res.end();
      return;
    }
    res.json(data);
  });
});



app.post('/api', (request, response) => {
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  response.json(data);
});