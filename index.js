//this is the index file that will serve as the ultimate traffic controller
const express = require('express')
const bodyParser = require('body-parser');
const app = express();

//the data that we will be using
const users = require("./routes/users");

app.use(bodyParser.json());
app.use(users);


app.get('/', (req, res) => res.send('default route'));
const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log('app is listening on:', port)
});