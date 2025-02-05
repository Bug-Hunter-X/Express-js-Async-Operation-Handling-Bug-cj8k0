const express = require('express');
const app = express();
const port = 3000;

// Simulate an asynchronous operation (e.g., database query)
const fetchData = async () => {
  // Simulate an asynchronous delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { message: 'Data fetched successfully!' };
};

app.get('/', async (req, res) => {
  try {
    const data = await fetchData();
    res.send(data.message);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});