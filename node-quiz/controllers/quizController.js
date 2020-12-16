const express = require('express');
const Quiz = require('../models/Quiz');

module.exports = {
  doGetQuiz: 
  (req, res, next) => {
    const quizes = Quiz.getQuiz
      if (!err) {
       res.status(200).send(quizes);
       console.log(quizes)
     } else {
       res.status(404).send({ err: 'Not Found!' });
     }
  }
}
    const quizes = Quiz.getQuiz()
console.log(quizes)