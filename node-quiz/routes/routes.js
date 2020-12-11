const express = require('express');
const app = express();
const quizController = require('../controllers/quizController')
const Quiz = require('../models/Quiz')
const request = require('request');
app.listen(4000, () => {
  console.log(' App listening on port 4000');
});



const options = {
  method: 'GET',
  json: true,
  url: 'https://opentdb.com/api.php?amount=10',
};

app.get('/api/v1/list', Quiz.getApi);