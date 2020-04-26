const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'matus',
      age: 27
    });
    reject('Something went wrong');
  }, 1500); 
});

console.log('before');

promise.then((data) => {
  console.log('1', data);

  return 'something';
}).then((str) => {
  console.log('This will run too', str);
}).catch((error) => {
  console.log('error:', error);
});

console.log('after');