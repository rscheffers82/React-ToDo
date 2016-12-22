import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBOJgxf8ay7QcuHElz-u1lfyWd2oNUaMVU",
  authDomain: "roykode-todo-app.firebaseapp.com",
  databaseURL: "https://roykode-todo-app.firebaseio.com",
  storageBucket: "roykode-todo-app.appspot.com",
  messagingSenderId: "911277345102"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '0.0.1'
  },
  isRunning: true,
  user: {
    name: 'Andrew',
    age: 25
  }
});

// update a value on the main branch of the tree
firebaseRef.update({
  'app/name': 'Todo Application branch',
  'user/name': 'Roy Scheffers branch'
});


// use multipaths to update multiple values
// firebaseRef.child('app').update({
//   name: 'Todo Application'
// });
// firebaseRef.child('user').update({
//   name: 'Roy Scheffers'
// });
