// Question: Write a function that takes an array of objects and filters them based on multiple criteria, returning only objects that match all criteria.

function returnCriteriaMatchedObject(array, criteria) {
  const arrayy = array.filter((obj) =>
    Object.keys(criteria).every((key) => criteria[key] === obj[key])
  );
  console.log(arrayy);
  return arrayy.map((product) => product.name);
}

const products = [
  { name: "apple", category: "fruit", price: 1 },
  { name: "banana", category: "fruit", price: 1 },
  { name: "carrot", category: "vegetable", price: 1 },
];

// console.log(products.map((user) => Object.keys(user)));
// console.log(Object.entries((key, value) => ))

console.log(
  returnCriteriaMatchedObject(products, { category: "fruit", price: 1 })
);
