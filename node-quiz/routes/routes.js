const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

router.get('/api/v1/list', quizController.doGetQuiz);
quizController.doGetQuiz();

module.exports = router;
