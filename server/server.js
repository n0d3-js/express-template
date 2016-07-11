import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import path from 'path';
import logger from './config/logging';
import favicon from 'serve-favicon';
import morgan from 'morgan';
require('./config/database');

logger.log('info', '[WINSTON] - log level: %s', process.env.LEVEL);

const app = express();

app.use(compression());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../static')));
app.use(favicon(path.join(__dirname, '../static/favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3333;

app.listen(port, () => {
  logger.log('info', '[EXPRESS] - listening port: %d', port);
});

app.use('/things', require('./controllers/things'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../static/index.html'));
});

module.exports = app;
