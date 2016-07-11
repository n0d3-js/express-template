/* eslint-disable new-cap */

import express from 'express';
import Thing from '../models/thing';
const router = module.exports = express.Router();

// index
router.get('/', (req, res) => {
  Thing.find().exec((err, things) => {
    res.send({ things });
  });
});
