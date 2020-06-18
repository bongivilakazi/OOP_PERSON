"use strict";
class Person {
  constructor(name, age, gender, interests) {
    this.age = age;
    this.name = name;
    this.gender = gender;
    this.interests = interests;
  }

  hello() {
    return (
      "hello, my name is " +
      this.name +
      " and i am " +
      this.age +
      " years old. My interest are " +
      this.interests[0] +
      ", " +
      this.interests[1] +
      " and " +
      this.interests[2]
    );
  }
}

let firstPerson = new Person("Ryan", 30, "male", [
  "being a hardarse",
  "agile",
  "ssd hard drives",
]);
let greeting = firstPerson.hello();
console.log(greeting);
module.exports = Person;
