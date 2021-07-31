// Require the mongoose module
var mongoose = require('mongoose');
// Set up a mongoose connection
// var mongoDB = 'mongodb://localhost:27017/blog';
// var mongoDB = "mongodb+srv://mongo_user:Mongo@cluster0.fbonz.mongodb.net/register/customer?retryWrites=true&w=majority";
// mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
// Get the connection
// var db = mongoose.connection;
// Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// db.once('open', function() {
//     console.log("we're connected!")
// });

const uniqueValidator = require("mongoose-unique-validator");

const registerSchema = new mongoose.Schema({
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
            message: props => `${props.value} invalid email.`
        }
    },
    postpassword: {
        type: String,
        required: "Please enter your password",
        trim: true,
        validate: {
            validator: function(v) {
                return v.length > 7;
            },
            message: props => `Password must be at least 8 characters.`
        }
    },
    // more fields defined below
});

registerSchema.plugin(uniqueValidator);

module.exports.Register = mongoose.model('Register', registerSchema);