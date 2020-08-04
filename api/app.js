const express = require('express');
const path = require('path');

const app = express();
pathToIndex = path.resolve('__dirname', '../client/index.html');
app.use('/*', (request, response) => {
    response.sendFile(pathToIndex);
})
module.exports = app;


