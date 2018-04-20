// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongoDB');
  }

  console.log('Connected to MongoDB');
  const db = client.db('TodoApp');

  // db.collection('Todos').deleteMany({
  //   text: 'Walk the dog'
  // }).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').deleteOne({
  //   text: 'Walk the dog'
  // }).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Todos').findOneAndDelete({
    completed: false
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