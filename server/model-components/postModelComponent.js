"use strict";
var dbConn = require("../config/db.config");

var Post = function(post){
    this.message = post.message;
    this.image = post.image;
};

Post.create = function (newPost, result) {
    dbConn.query("INSERT INTO posts SET ?", newPost,function(err,res){
        if(err) {
            console.log("error: ",err);
            result(err,null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

module.exports = Post;