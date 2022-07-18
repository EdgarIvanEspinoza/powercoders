// const dotenv = require('dotenv');
// dotenv.config();

require('dotenv').config();

const { MYSQL_USER, MYSQL_PASS, LANG } = process.env;

console.log('process.env.MYSQL_USER: ', MYSQL_USER);
console.log('process.env.MYSQL_PASS: ', MYSQL_PASS);
console.log('process.env.LANG: ', LANG);
