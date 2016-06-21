import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import path from 'path';
import logger from './config/logging';

logger.log('info', '[WINSTON] - log level: %s', process.env.LEVEL);

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../views'));
app.use(compression());
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3333;

app.listen(port, () => {
  logger.log('info', '[EXPRESS] - listening port: %d', port);
});

module.exports = app;
