const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Uncommon bug: Inconsistent handling of asynchronous operations
// For example, if you're using a database, and you do not handle the async nature of database operations properly, it could cause an error or data inconsistency.