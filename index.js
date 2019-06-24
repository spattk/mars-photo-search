const express = require('express');
const path = require('path');

const app = express();

//Serving the static files from react-app
app.use(express.static(path.join(__dirname, 'client/build')));

const targetUrl = 'http://localhost:3000';

function handleRedirect(req, res) {
    res.redirect(targetUrl);
}

app.get('*', handleRedirect);

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`App is listening on port : ${port}`)