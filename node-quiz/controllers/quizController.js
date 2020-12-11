const express = require('express');
const Quiz = require('../models/Quiz');

module.exports = {
  doGetQuiz: Quiz.getQuiz
}