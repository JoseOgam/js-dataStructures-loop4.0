class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

}

class Ogam extends Student {
    constructor(name, age, major, level) {
        super(name, age, major);
        this.level = level;
    }
}
var person1 = new Person("Jose", 40);
console.log(person1);

var student1 = new Student("Jose", 40, "Javascript");
console.log(student1);

var jose = new Ogam("Joseph Otieno", 25, "Javascript", "Beginner");
console.log(jose);

/*
function multiply(a, b) {

    return a * b;
}
console.log(multiply(50, 400));*/