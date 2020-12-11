const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const ejs = require('ejs');
app.set('view engine', 'ejs');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(urlencodedParser);
app.listen(4000, () => {
  console.log(' App listening on port 4000');
});


