'use strict'

const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'blogAdmin',
	password: 'byxiaowu9',
	database: 'blog'
});

console.log('Database connected.');

module.exports = connection;
