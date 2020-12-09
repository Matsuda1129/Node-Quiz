const express = require('express');
const Quiz = require('../models/Quiz');

module.exports = {
  doGetQuiz: function (req, res) {
    Quiz.getQuiz((quizes) => {
      res.send(quizes);
    });
  },
};
