// 9/21/2023


class Person {
  constructor(name,age, desire) {
    this.name = name;
    this.age = age;
    this.desire = desire;
    this.greet();
  }
  greet() {console.log('Hello, my name is ${this.name}!')
}
}

let dorothy = new Person("Dorothy", 12, "Kansas");
dorothy.greet() ;
console.log(dorothy.desire);
console.log(dorothy) ;

class Lion extends Person {
  eat() {
    console.log("Yum!");
  }
}

cowardly = new Lion("Coward", 20, "Courage");
cowardly.eat()