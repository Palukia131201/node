const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const handlebars = require('express-handlebars');
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
