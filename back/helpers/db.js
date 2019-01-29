import mysql from 'mysql';

const connection = mysql.createConnection({
  host: '192.168.64.2',
  user: 'root',
  password: 'azerty123',
  database: 'cinewild'
});


module.exports = connection;
