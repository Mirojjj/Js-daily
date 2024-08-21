const greetings = async () => {
  const data = await fetchData();
  console.log(data.name);
  console.log("this run while the data awaits");
};

const fetchData = () => {
  return new Promise((resolve, reject) => {
    const data = { id: 1, name: "miroj" };
    let success = true;
    setTimeout(() => {
      if (success) {
        resolve(data);
      } else {
        reject("not success");
      }
    }, 3000);
  });
};

greetings();

let str = "istanbul";
console.log(str.toUpperCase()); // Output: "ISTANBUL"
console.log(str.toLocaleUpperCase("tr-TR"));
