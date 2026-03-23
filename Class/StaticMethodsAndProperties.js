class User {
  static sayHi() {
    console.log("Hello");
  }
}

User.sayHi(); //Hello

/*
// Not available on objects:

const user = new User();
user.sayHi(); // Error

*/

//this inside static

class User1 {
  static sayHi() {
    console.log(this == User1); //true   {this = class constructor}
  }
}

User1.sayHi();

//  Real-world Use Cases

// (a) Utility / Helper methods
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(a, b) {
    return a.date - b.date;
  }
}

// create array of articles
const articles = [
  new Article("Article 1", 2020),
  new Article("Article 2", 2018),
  new Article("Article 3", 2022),
];

articles.sort(Article.compare);
// print result
articles.forEach((article) => {
  console.log(article.title, article.date);
});

// b.Factory Methods

class Article1 {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static createTodays() {
    return new this("Today's article", new Date());
  }
}

const article = Article1.createTodays();
console.log(article);

//Static Properties

class Article3 {
  static publisher = "Ilya Kantor";
}

console.log(Article3.publisher); //Ilya Kantor

//Static Inheritance
class Animal {
  static planet = "Earth";
  static compare(a, b) {
    return a.speed - b.speed;
  }
}

class Rabbit extends Animal {}

console.log(Rabbit.planet); // Earth

// Rabbit.__proto__ === Animal // true
