"use strict";
const Post = require("../model-components/postModelComponent");

exports.create = function(req,res) {
    const new_post = new Post(req.body);

    Post.create(new_post,function(err,post){
        if(err){
            res.send(err);
        }
        console.log("successss");
        res.json({error:false,status:200,message: "Post added succesfully!!!",data:post});
    });
};
