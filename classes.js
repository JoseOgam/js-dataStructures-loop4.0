class Circle {
    constructor(radius) {
        this.radius = 3
    }
}

class Perimeter extends Circle {
    constructor() {
        super();
    }
    per() {
        return `the perimeter is:` + 2 * Math.PI * this.radius;
    }
}

class Area extends Circle {
    constructor() {
        super();
    }
    ari() {
        return `the area is:` + Math.PI * this.radius * this.radius;
    }
}

let cal1 = new Perimeter();
let cal2 = new Area();

console.log(cal1.per());
console.log(cal2.ari());