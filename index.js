const express = require('express');
const path = require('path');

const app = express();

//Serving the static files from react-app
app.use(express.static(path.join(__dirname, 'client/build')));

//trial endpoint
app.get('/api/trial', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`App is listening on port : ${port}`)