'use strict'

const Express = require('express');
const router = Express.Router();
const dbHelper = require('./db/dbHelper.js');
const libraryDbHelper = require('./db/libraryDbHelper.js')

dbHelper(router);
libraryDbHelper(router);

module.exports = router;
