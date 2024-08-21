const timeLimit = function (fn, t) {
  console.log(t);
  return async function (...args) {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject("time out has been exceeded"), t);

      fn(...args)
        .then(resolve)
        .then("fn ran")
        .catch(reject);
    });
  };
};

async function asyncFunction(n, i) {
  await new Promise((res) => setTimeout(res, 1000));
  return n * i;
}

const limited = timeLimit(asyncFunction, 2000);

limited(5, 2)
  .then(console.log)
  .catch((e) => console.log(e));
