"use strict";
var dbConn = require("../config/db.config");

//Account object create
class LoginAccount {
  constructor(account) {
    this.email = account.email;
    this.password = account.password;
  }
  
  static findByEmailAndPassword(email, password, result) {
    dbConn.query(
      "SELECT * FROM accounts WHERE email=? AND password=?",
      email, password,
      function (err, res) {
        if (err) {
          console.log(err, null);
        } else {
          // console.log(res);
          result(null, res);
        }
      }
    );
    // console.log(result);
  }
}

module.exports = LoginAccount;