const express = require('express');
const Quiz = require('../models/Quiz');

module.exports = {
  doGetQuiz: (req, res, next) => {
    Quiz.getQuiz().then((quizes) => {
        res.status(200).send(quizes);
    });
  },
};
