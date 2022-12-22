"use strict";
var dbConn = require("../config/db.config");

var Post = function (post) {
  this.accountId = post.accountId;
  this.message = post.message;
  this.image = post.image;
};

Post.create = function (newPost, result) {
  dbConn.query("INSERT INTO posts SET ?", newPost, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Post.findAll = function (result) {
  dbConn.query("SELECT * FROM posts", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("posts: ", res);
      result(null, res);
    }
  });
};

module.exports = Post;
