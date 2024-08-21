const myPromise = new Promise((resolve, reject) => {
  let success = true;
  setTimeout(() => {
    if (success) {
      resolve("Sucesss");
    } else {
      reject({ status: 404, message: "resjert" });
    }
  }, 3000);
});

const awaitResponse = () => {
  setTimeout(() => {
    console.log("Hello world");
  }, 1000);
};

myPromise
  .then((result) => {
    console.log(result);
  })
  .then(awaitResponse)
  .catch((e) => console.log(e.status));
