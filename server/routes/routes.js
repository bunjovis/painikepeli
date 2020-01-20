'use scrict';

const express = require('express');
const game = require('../controllers/game.js');

const router = express.Router();
// Main view
router.get('/', async (req, res) => {
  res.sendFile('index.html', { root: 'client/build/' });
});
// Handle game routes
router.get('/clickbutton', game.handleClick);
router.get('/newgame', game.handleNewGame);
router.get('/getpoints', game.handleGetPoints);

module.exports = router;
