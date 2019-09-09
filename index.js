const express  = require('express')
const routes = require('./routes/api')
const bodyParser = require('body-parser');

//Set up express app
const app = express();

app.use(bodyParser.json());

//initialize routes.
app.use('/api',routes);


//Listen for request
const Port = process.env.port || 4000;
app.listen(Port, () => {
console.log('Now Listing from requst')
})