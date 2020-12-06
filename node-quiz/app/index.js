const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const ejs = require('ejs');
app.set('view engine', 'ejs');
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.use(urlencodedParser);
app.listen(4000, () => {
  console.log(' App listening on port 4000');
});

const request = require('request');
const options = {
  method: 'GET',
  json: true,
  url: 'https://opentdb.com/api.php?amount=10',
};

// app.get('/', (req, res) => {
//   res.render('home');
// });

app.get("/api/v1/list", (req, res) => {
  // クライアントに送るJSONデータ
  request(options, function (error, response, body) {
    console.log(body);
    const todoList = body.results
    class Quiz {
      constructor(
        category,
        difficulty,
        question,
        correct_answer,
        incorrect_answers
      ) {
        this.category = category;
        this.difficulty = difficulty;
        this.question = question;
        this.correct_answer = correct_answer;
        this.incorrect_answers = incorrect_answers;
      }
    }

    let quizes = [];
    for (let i = 0; i < 10; i++){
      let b = new Quiz(
        todoList[i].category,
        todoList[i].difficulty,
        todoList[i].question,
        todoList[i].correct_answer,
        todoList[i].incorrect_answers);
      quizes.push(b);
    }
    res.send(quizes);

    
  });
});
