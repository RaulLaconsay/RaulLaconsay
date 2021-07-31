var express = require('express');
var router = express.Router();
const Post = require('../models/postMdl').Post;

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// Show the create form
router.get('/create', function (req, res, next) {
  res.render('post-create');
});

// To create a new post
router.post('/create', function (req, res, next) {
  // const post = new Post(req.body);
  const post = new Post();
  post.posttitle = req.body.posttitle
  post.postbody = req.body.postbody
  post.save(err => {
    // if(err) throw err;
    if (err) {
      const errorArray = [];
      const errorKeys = Object.keys(err.errors);
      errorKeys.forEach(key => errorArray.push(err.errors[key].message));
      return res.render("post-create", {
        errors: errorArray
      });
    }
    res.redirect("/post");
  });
});

module.exports = router;
