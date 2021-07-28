// Require the mongoose module
var mongoose = require('mongoose');
// Set up a mongoose connection
// var mongoDB = 'mongodb://localhost:27017/blog';
var mongoDB = "mongodb+srv://mongo_user:Mongo@cluster0.fbonz.mongodb.net/comments?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
// // Get the connection
var db = mongoose.connection;
// // Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function() {
    console.log("we're connected! postmdl")
});

// const postSchema = new mongoose.Schema({
//     posttitle: {
//         type: String,
//         required: "Please enter the post title.",
//         trim: true
//     },
//     postbody: {
//         type: String,
//         required: "Please write your post body.",
//         trim: true
//     },
//     posturl: {
//         type: String,
//         trim: true
//     },
//     // more fields defined below
// });

// module.exports.Post = mongoose.model('Post', postSchema);