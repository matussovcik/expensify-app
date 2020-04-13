////////////////////////////////
// Object destructuring
////////////////////////////////

// const person = { 
//   name: 'Matus',
//   age: 27, 
//   location: {
//     city: 'Prague',
//     temp: 15
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'self-published'} = book.publisher;

// console.log(publisherName);

////////////////////////////////
// Array destructuring
////////////////////////////////

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [ , city, state = 'New York'] = address;

// console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2', '$2.5', '$2.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}.`);