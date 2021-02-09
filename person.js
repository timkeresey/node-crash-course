class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }
}

// module.exports = Person;

const person1 = new Person("Jim Jimson", 35);

person1.greeting();
