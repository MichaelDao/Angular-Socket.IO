const express = require('express');
const http = require('http');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port = process.env.port || 3000;

const app = express();

const server = http.createServer(app);

const chat = require('./models/chat');

// connect to my good old mongodb
mongoose.connect('mongodb://testUser:password123@ds161322.mlab.com:61322/chatroom').then(() => {
  console.log('Connected');
})

app.use(express.static(path.join(__dirname, 'dist/realtimechat')));

app.post('/chat', (req, res) => {
  const chat = new chat({
    description: 'Test data'
  });
  chat.save();
})


// lets listen to port 3000
server.listen(port);

// this is just gonna have to wait
// https://www.youtube.com/watch?v=vrToHmPMEQo

