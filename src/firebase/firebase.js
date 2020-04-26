import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: "1:723288489221:web:4fc4086e6e2e630888cb6c",
  measurementId: "G-24RE608XVK"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref('notes').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('notes').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('notes').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('notes')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });


// const expenses = [{
//   description: 'Gum',
//   note: '',
//   amount: 193,
//   createdAt: 0
// }, {
//   description: 'DUUUH',
//   note: '',
//   amount: 13411,
//   createdAt: moment(0).subtract(4, 'days').valueOf()
// }, {
//   description: 'Boring',
//   note: 'booooored!',
//   amount: 19161613,
//   createdAt: moment(0).add(4, 'days').valueOf()
// }];

// expenses.forEach((expense) => {
//   database.ref('notes').push(expense);
// });


// database.ref('notes').set(notes);

// database.ref('location')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('error fetching data', e)
//   });

// database.ref().set({
//   name: 'Matus',
//   age: 27,
//   stressLevel: 0,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Prague',
//     country: 'Czechia'
//   }
// }).then(() => {
//   console.log('Data is saved.');
// }).catch((err) => {
//   console.log('This failed.', err);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('delete succesful');
//   }).catch((e) => {
//     console.log('delete unsuccesful', e);
//   })
// ;