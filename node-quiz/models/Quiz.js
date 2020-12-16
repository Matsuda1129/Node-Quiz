const request = require('request');

module.exports = {
  getQuiz: (req, res) => {
      const options = {
        method: 'GET',
        json: true,
        url: 'https://opentdb.com/api.php?amount=10',
      };

      request(options, function (err, response, body) {
        const apiList = body.results;
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
            this.shuffleAnswers = shuffleAnswers;
          }
        }

        const quizes = [];
        for (let i = 0; i < 10; i++) {
          const answerslist = [];
          answerslist.push(...apiList[i].incorrect_answers);
          answerslist.push(apiList[i].correct_answer);

          const shuffleAnswers = shuffle([...answerslist]);

          const quizInstance = new Quiz(
            apiList[i].category,
            apiList[i].difficulty,
            apiList[i].question,
            apiList[i].correct_answer,
            apiList[i].incorrect_answers,
            shuffleAnswers
          );
          quizes.push(quizInstance);
        }
        return quizes
      });
  },
};

const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
  return arr;
};
