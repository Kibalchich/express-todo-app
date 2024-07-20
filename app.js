const express = require('express');
const app = express();

app.use('/api', express.JSON);

app.get('/', true, function (req, res) {
  res.send('Hello World!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
