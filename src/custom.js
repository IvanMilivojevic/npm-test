import { sum } from "./utility/new.js";
import { sub } from "./utility/app.js";

const result = sum(2, 5);
const resultsub = sub(2, 5);

console.log(result);
console.log(resultsub);

class Being {
  being() {
    return "Being";
  }
}

class Human extends Being {
  constructor(gender) {
    super();
    this.gender = gender;
  }

  showGender() {
    return this.gender;
  }
}

class Person extends Human {
  constructor(name, surname, gender) {
    super(gender);
    this.name = name;
    this.surname = surname;
    this.fullName = function() {
      console.log(this);
      console.log(this.name + " " + this.surname);
    };
  }
}

const person = new Person("ivan", "milivojevic", "m");

console.dir(person);
console.dir(person.fullName());
console.dir(person.showGender());

const { fullName: f } = person;

const newp = {
  name: "te",
  surname: "12"
};

newp.fun = f;

console.log(newp);
f();
