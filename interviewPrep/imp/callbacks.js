//synchronous callbacks

function greetings(fn) {
  fn("miroj");
}

function greet(name) {
  console.log("Hello " + name);
}

greetings(greet);

//asynchronous callbacks

const fetchData = (cb) => {
  setTimeout(() => {
    const data = { id: 1, name: "miroj" };
    cb(data);
  }, 2000);
};

const handleData = (data) => {
  console.log("helloo " + data.name);
};

fetchData(handleData);
