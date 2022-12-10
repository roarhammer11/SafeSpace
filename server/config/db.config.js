import mysql from "mysql";
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
});
export default dbConn;
