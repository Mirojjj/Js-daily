const obj = {
  a: 1,
  b: 2,
};

const newObj = Object.keys(obj).reduce((acc, key) => {
  acc[key] = obj[key] * 2;
  return acc;
}, {});

//another method

const newObjj = Object.fromEntries(
  Object.entries(obj).map(([key, value]) => [key, value])
);

console.log(newObjj);
