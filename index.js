const express = require('express');
const mongoose = require('mongoose');

const PORT = 3000;
const DB = 'mongodb://localhost/notasapp';

mongoose.connect(DB).then(() => console.log('DB conectada'));

const app = express();

app.use('/',require ('./api/note'));

// const User = require('./models/User');

// app.get('/api/users', (req, res) => {
  // User.find((err, users) => {
  // res.json(users);
  // });
// });

app.use(express.static('public'));

app.listen(PORT);
