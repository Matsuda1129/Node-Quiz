const request = require('request');
const options = {
  method: 'GET',
  json: true,
  url: 'https://opentdb.com/api.php?amount=10',
};

const getApi = (req, res) => {
  // クライアントに送るJSONデータ
  request(options, function (error, response, body) {
    console.log(body);
    const quizList = body.results;
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
    for (let i = 0; i < 10; i++) {
      let b = new Quiz(
        quizList[i].category,
        quizList[i].difficulty,
        quizList[i].question,
        quizList[i].correct_answer,
        quizList[i].incorrect_answers
      );
      quizes.push(b);
    }
    res.send(quizes);
  });
};

 module.exports = getApi