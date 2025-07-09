//promise is an object

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved");
  }, 3000);
});
promise1
  .then((res) => console.log(res))
  .then(() =>
    setTimeout(() => {
      console.log("p2");
    }, 2000)
  )
  .then(() =>
    setTimeout(() => {
      console.log("p3");
    }, 5000)
  )
  .then(() =>
    setTimeout(() => {
      console.log("p4");
    }, 1000)
  )
  .catch((err) => console.log(err));
