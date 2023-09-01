const myName = "OluwaTimiLehin  Maliki";

// console.log(myName[2])

console.log(myName.indexOf("T"));
console.log(myName.lastIndexOf("i"));
console.log(myName.slice(5, 7));
// console.log(myName.slice(-5))
console.log(myName.slice(0, myName.indexOf("")));

const middleFinger = (thirdFinger) => {
  const tFinger = thirdFinger.slice(2, -2);

  if (tFinger === "3" || tFinger === "4") {
    console.log("fuckYou");
  } else {
    console.log("spoonYou");
  }
};

middleFinger("54321");
middleFinger("23451");
middleFinger("12251");

const email = "  Timi@gmail.com";

const upperCaseEmail = email.toUpperCase().trim();
console.log(upperCaseEmail);

const replace = email.replaceAll(" Timi@gmail.com", "malikitimi@gmail.com");
console.log(replace);

const love = new String("You+Me").split("+");
const Ily = new String("You+Me").split("");
console.log(love);
console.log(Ily);

const word = new String("racecar");
const reverseWord = word.split("").reverse("").join("");
console.log(reverseWord)
