const express = require('express');
const app = express();
const quizController = require('../controllers/quizController');
const router = express.Router();

app.listen(4000, () => {
  console.log(' App listening on port 4000');
});

app.get('/api/v1/list', quizController.doGetQuiz);

module.exports = router;
