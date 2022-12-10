import dbConn from "../../client/src/config/db.config";

//Account object create
export class Account {
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
        console.log(res.insertId);
        result(null, res.insertId);
      }
    });
  }
}
