const request = require('request');

module.exports = {
  getQuiz: function () {
    const options = {
      method: 'GET',
      json: true,
      url: 'https://opentdb.com/api.php?amount=10',
    };

    request(options, function (error, response, body) {
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

      const quizes = [];
      for (let i = 0; i < 10; i++) {
        let quizInstance = new Quiz(
          quizList[i].category,
          quizList[i].difficulty,
          quizList[i].question,
          quizList[i].correct_answer,
          quizList[i].incorrect_answers
        );
        quizes.push(quizInstance);
      }
      console.log(quizes);
    });
  },
};
