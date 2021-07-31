var express = require('express');
var router = express.Router();
const Register = require('../models/regMdl').Register;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('register', { title: 'Register' });
});


// // Show the create form
// router.get('/create', function(req, res, next) {
//     res.render('contact-create', { title: 'Thank You' });
// });

// To create a new post
router.post('/', function(req, res, next) {
    const data = req.body;
    const post = new Register();
    post.postfname = data.firstname;
    post.postlname = data.lastname;
    post.postemail = data.email;
    post.postpassword = data.password;

    post.save(err => {
        // if(err) throw err;
        if (err) {
            const errorArray = [];
            const errorKeys = Object.keys(err.errors);
            errorKeys.forEach(key => errorArray.push(err.errors[key].message));
            return res.render("register", {
                errors: errorArray
            });
        }
        res.redirect("register", {
            title: 'Register',
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            password: data.password
        });

    });
});

module.exports = router;