const rest = new Map();
rest.set("me", "money");
rest.set("occupation", "billionare");
rest.set(true, "I am wealthy");
rest.set("age", 24);
rest.set("year", 1999);
rest.set("youngerBroAGe", 2004);

const year = 2023;

console.log(rest);
console.log(year > rest.get("year") || 
year < rest.get("youngerBroAge"));


