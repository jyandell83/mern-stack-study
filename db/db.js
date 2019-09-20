const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/dev';


mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true 
});

mongoose.connection.on('connected', () => {
  console.log(`mongoose connected to ${connectionString}`);
});


mongoose.connection.on('disconnected', () => {
  console.log(`mongoose disconnected to ${connectionString}`);
});

mongoose.connection.on('error', (err) => {
  console.log(`mongoose error to ${err}`);
});