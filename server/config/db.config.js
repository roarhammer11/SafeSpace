"use strict"
const mysql = require("mysql2");
//local mysql db connection
const dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "safespace",
});
dbConn.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!");
  console.log(err);
  console.log(dbConn);
});
module.exports =  dbConn;

