const request = require('request');

module.exports = {
  getQuiz: (req, res) => {
    
    const options = {
      method: 'GET',
      json: true,
      url: 'https://opentdb.com/api.php?amount=10',
    };

    request(options, function (err, response, body) {
      const quizList = body.results;
      class Quiz {
        constructor(
          category,
          difficulty,
          question,
          correct_answer,
          incorrect_answers,
          shuffleAnswers
        ) {
          this.category = category;
          this.difficulty = difficulty;
          this.question = question;
          this.correct_answer = correct_answer;
          this.incorrect_answers = incorrect_answers;
          this.shuffleAnswers = shuffleAnswers
        }
      }

      const shuffle = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr;
      };

      let quizes = [];
      for (let i = 0; i < 10; i++) {
         const answerslist = [];
         answerslist.push(...quizList[i].incorrect_answers);
         answerslist.push(quizList[i].correct_answer);

         const shuffleAnswers = shuffle([...answerslist]);

        let quizInstance = new Quiz(
          quizList[i].category,
          quizList[i].difficulty,
          quizList[i].question,
          quizList[i].correct_answer,
          quizList[i].incorrect_answers,
          shuffleAnswers
        );
        quizes.push(quizInstance);
      }
      if (!err) {
        res.status(200).send(quizes);
      } else {
        res.status(404).send({ err: 'Not Found!' });
      }
    });
  }
}