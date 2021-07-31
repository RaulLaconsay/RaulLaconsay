// Require the mongoose module
var mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

const postSchema = new mongoose.Schema({
    postfname: {
        type: String,
        required: "Please enter your first name.",
        trim: true
    },
    postlname: {
        type: String,
        required: "Please enter your last name.",
        trim: true
    },
    postemail: {
        type: String,
        required: "Please enter your email.",
        trim: true,
        validate: {
            validator: function(v) {
                return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(v);
            },
            message: props => `${props.value} is an invalid email.`
        }
    },
    postcomments: {
        type: String,
        required: "Please write your comments/questions.",
        trim: true,
        validate: {
            validator: function(v) {
                return v.length > 10;
            },
            message: props => `${props.value} is comment is too short.`
        }
    },
    // more fields defined below
});

postSchema.plugin(uniqueValidator);

module.exports.Contact = mongoose.model('Post', postSchema);