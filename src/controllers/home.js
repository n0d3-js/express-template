/* eslint-disable new-cap */

import express from 'express';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  res.render('home/index');
});

router.get('/about', (req, res) => {
  res.render('home/about');
});

router.get('/faq', (req, res) => {
  res.render('home/faq');
});
