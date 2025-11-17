function orderPizza() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Pizza is ready!");
    }, 3000);
  });
}

orderPizza().then(message => {
  console.log(message);
});

console.log("Doing other work...");


//OUTPUT
/*
Doing other work...
Pizza is ready!
*/


async function getPizza() {
  console.log("Waiting for pizza...");
  const message = await orderPizza();
  console.log(message);
}

getPizza();
console.log("This prints after function starts");

//OUTPUT
/*
Waiting for pizza...
This prints after function starts
Pizza is ready!
*/