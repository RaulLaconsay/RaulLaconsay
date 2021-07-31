var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
// var postRouter = require('./routes/post');
var contactRouter = require('./routes/contact');
var aboutRouter = require('./routes/about');
var registerRouter = require('./routes/register');

// Require the mongoose module
// var mongoose = require('mongoose');
var app = express();
// Set up a mongoose connection
// var mongoDB = 'mongodb://localhost:27017/blog';
// var mongoDB = "mongodb+srv://mongo_user:Mongo@cluster0.fbonz.mongodb.net/contact?retryWrites=true&w=majority";
// mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
// Get the connection
// var db = mongoose.connection;
// Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// db.once('open', function() {
//     console.log("we're connected! to db")
// });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/post', postRouter);
app.use('/contact', contactRouter);
app.use('/about', aboutRouter);
app.use('/register', registerRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    res.status(404).render('e404', { title: 'Error 404' });
})

app.use(function(req, res, next) {
    next(createError(404));
    res.render('error');
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;