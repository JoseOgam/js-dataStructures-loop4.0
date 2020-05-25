class Student {
    constructor() {
        this.name = 'Joseph Otieno';
    }

    student() {
        return ` is: ${this.name}`;
    }

}

class Ogam extends Student {
    display() {
        return 'student name ' + super.student();
    }

}

let ogam = new Ogam();
console.log(ogam.display());