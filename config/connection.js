var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
	// DB is JawsDB on Heroku
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	// DB is local on localhost
	connection = mysql.createConnection({
		port: 3306,
		host: 'i5x1cqhq5xbqtv00.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'fr2eheytwht299aa',
		password: 'tclcjmro6kqhewd2',
		database: 'kviak27zr93c3fdv'
	})
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
module.exports = connection;
