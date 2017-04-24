const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const redis        = require("redis");
const session      = require('express-session');
const RedisStore   = require('connect-redis')(session);
const mongoose     = require('mongoose');
const passport     = require('passport');


//Routes
const index = require('./routes/index');

//Init App
const app = express();

//Configs
const MongoConfig = require('./config/mongodb.js');
const RedisConfig = require('./config/redis.js');

//Mongoose Setup
mongoose.connect(MongoConfig.url);
mongoose.Promise = global.Promise;

//Redis Setup
const client = redis.createClient(RedisConfig);
client.on('connect', function() {
  console.log('Connected to Redis');
});

// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//Serve Favicon & Morgan
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

//Body Parser & Cookie Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//Session
app.use(session({
  secret: 'shamballa',
  saveUninitialized: true,
  resave: true,
  store: new RedisStore({client: client})
}));

//Passport Init
app.use(passport.initialize());
app.use(passport.session());

//Passport Config
require('./config/passport');

//Static Directories
app.use(express.static(path.join(__dirname, 'public')));

//Init Routes
app.use('/', index);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.locals.layout = '';

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
