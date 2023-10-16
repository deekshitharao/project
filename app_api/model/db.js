const mongoose = require('mongoose');
require('dotenv').config();

let dbURI="mongodb://0.0.0.0:27017/Weatherwis";
if (process.env.NODE_ENV === 'production') {
  dbURI = process.env.MONGODB_URI;
}
mongoose.connect(dbURI);


mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected ${dbURI}`);
});
mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close( () => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};


require('./location');

