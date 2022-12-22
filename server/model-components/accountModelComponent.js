"use strict";
var dbConn = require("../config/db.config");

// const mysql2 = require('mysql2');

//   const dbConn2 = mysql2.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "safespace",
//   });

//Account object create
class Account {
  constructor(account) {
    this.userName = account.userName;
    this.email = account.email;
    this.password = account.password;
    this.userType = account.userType;
  }
  //create account
  static create(newAccount, result) {
    dbConn.query("INSERT INTO accounts set ?", newAccount, function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res.insertId);
      }
    });
  }
  //query a single entry
  static findById(accountId, result) {
    dbConn.query(
      "SELECT * FROM accounts WHERE accountId=?",
      accountId,
      function (err, res) {
        if (err) {
          console.log(err, null);
        } else {
          result(null, res);
        }
      }
    );
  }
  static findByEmail(email, result) {
    dbConn.query(
      "SELECT * FROM accounts WHERE email=?",
      email,
      function (err, res) {
        if (err) {
          console.log(err, null);
        } else {
          result(null, res);
        }
      }
    );
  }

  static findByEmailAndPassword(email, password, result) {
    const query = 'SELECT * FROM accounts WHERE email = ? AND password = ?';
    dbConn.query(query, [email, password], function (err, res) {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        console.log(res);
        result(null, res.length);
      }
    });
  }
}

module.exports = Account;
