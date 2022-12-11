"use strict"
const Account = require("../model-components/accountModelComponent");

exports.create = function (req, res) {
  const newAccount = new Account(req.body);
  //handles null error
  console.log(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({error: true, message: "Please provide all required field"});
  } else {
    Account.create(newAccount, function (err, account) {
      if (err) {
        res.send(err);
      }
      res.json({
        error: false,
        status: 200,
        message: "Account added successfully!",
        data: account,
      });
    });
  }
};
