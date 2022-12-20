"use strict";
const { findByEmailAndPassword } = require("../model-components/accountModelComponent");
const Account = require("../model-components/accountModelComponent");
const LoginAccount = require("../model-components/loginModelComponent");
const findByEmail = (req, res) => {
  Account.findByEmail(req, function (err, account) {
    if (err) {
      res.send(err);
    }
    if (Object.keys(account).length !== 0) {
      res(409);
    } else {
      res(200);
    }
  });
};

const findByEmailAndPassword = (req, res) => {
  LoginAccount.findByEmailAndPassword(req, function (err, account) {
    if (err) {
      res.send(err);
    }
    if (Object.keys(account).length !== 0) {
      res(409);
    } else {
      res(200);
    }
  });
};

exports.create = function (req, res) {
  const newAccount = new Account(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({error: true, message: "Please provide all required field"});
  } else {
    findByEmail(newAccount["email"], function (status) {
      if (status == 200) {
        Account.create(newAccount, function (err, account) {
          if (err) {
            res.send(err);
          }
          res.json({
            error: false,
            status: 200,
            message: "Account added successfully! Please log in.",
            data: account,
          });
        });
      } else {
        res.status(409).send({error: true, message: "Email already exists."});
      }
    });
  }
};

exports.findById = function (req, res) {
  Account.findById(req.params.accountId, function (err, account) {
    if (err) {
      res.send(err);
    }
    if (Object.keys(account).length !== 0) {
      res.json({status: 200, data: account});
    } else {
      res.json({status: 404});
    }
  });
};

exports.login = function (req, res) {
  const loginAccount = new LoginAccount(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({error: true, message: "Please provide all required field"});
  } else {
    findByEmailAndPassword(loginAccount["email"], loginAccount["password"], 200);
  }
};


