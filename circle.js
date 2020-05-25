//calculate the area and perimeter of a circle

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

let cal = new Circle(3);
console.log('area is', cal.area().toFixed(2));
console.log('perimeter is', cal.perimeter().toFixed(2));