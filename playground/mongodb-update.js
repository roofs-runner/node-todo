// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongoDB');
  }

  console.log('Connected to MongoDB');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5ad9cf5d821e9cc9b840be89')
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5ad9cb5f821e9cc9b840bdb4')
  }, {
    $set: {name: 'Hulk'},
    $inc: {age: 1}
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });


  // client.close();
});