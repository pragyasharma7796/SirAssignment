//Question 1
// let promise = Promise.resolve(3);
// promise.then(value => console.log(value));//3

//Question 2
// let promise = new Promise((resolve, reject) => {
//     resolve("Success!");
//   });
//   promise.then(value => console.log(value));//success

//Question 3
//Promise.reject('Error occurred').catch(err => console.log(err));//error occurred

//Question 4
// let promise = Promise.resolve(1);
// promise.then(value => value + 2).then(value => console.log(value));//3

//Question 5
// Promise.resolve("Resolved").then(console.log);
// Promise.reject("Rejected").catch(console.log);

//Question 6
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Resolved!"), 1000);
//   });
//   promise.then(value => console.log(value));
//   console.log("After promise");

//Question 7
//  Promise.resolve(2)
//   .then(value => value * 2)
//   .then(value => Promise.resolve(value * 2))
//   .then(value => console.log(value));//8

//Question 8
// Promise.reject('Initial Error')
//   .catch(err => { throw new Error('New Error'); })
//   .catch(err => console.log(err.message));//new Error

//Question 9
// async function asyncFunction() {
//     return 4;
//   }
//   asyncFunction().then(console.log);//4

//Question 10

// let promise = Promise.resolve(Promise.resolve('Resolve'));
// promise.then(res => console.log(res));

//Question 11

// let promise1 = Promise.resolve('First');
// let promise2 = Promise.resolve('Second');
// Promise.race([promise1, promise2]).then(value => console.log(value));//first

//Question 12
// let promise = new Promise((resolve, reject) => {
//     throw new Error('Error thrown');
//   });
//   promise.catch(error => console.log(error.message));

//Question 13
// async function asyncFunc() {
//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve("Done!"), 1000);
//     });
//     let result = await promise;
//     console.log(result);
//   }
//   asyncFunc();
//   console.log("After async function");
  //Question14
  Promise.all([
    Promise.resolve('Promise 1'),
    Promise.reject('Promise 2'),
    Promise.resolve('Promise 3')
  ]).then(console.log).catch(console.log);

  //Question15
  let promise = new Promise((resolve, reject) => {
    resolve('Promise resolved');
    reject('Promise rejected');
  });
  promise.then(console.log).catch(console.log);