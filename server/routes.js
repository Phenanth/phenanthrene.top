'use strict'

const Express = require('express');
const router = Express.Router();
const dbHelper = require('./db/dbHelper.js');
const libraryDbHelper = require('./db/libraryDbHelper.js')
const blogDbHelper = require('./db/blogDbHelper.js')

dbHelper(router);
libraryDbHelper(router);
blogDbHelper(router);

module.exports = router;
