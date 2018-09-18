const express = require('express');
const http = require('http');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port = process.env.port || 3000;

const app = express();

const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'src')));

// lets listen to port 3000
server.listen(port);

// this is just gonna have to wait
// https://www.youtube.com/watch?v=vrToHmPMEQo 
