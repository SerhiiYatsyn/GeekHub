/** Завдання створити класи:
 *    фігура:
 *      координати:
 *      х, у
 *
 *    багатокутник -> фігура:
 *      вершини[координати],
 *      периметр()
 *
 *    прямокутник -> багатокутник:
 *      довжина,
 *      висота,
 *      площа(),
 *      периметр()
 *
 *    квадрат -> прямокутник:
 *      довжинаСторони,
 *      площа(),
 *      периметр()
 *
 *    круг -> фігура:
 *      радіус,
 *      площа(),
 *      периметр()
 */

class Point {
    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    getPointAtOffset(x1, y1) {
        return new Point(this.x + x1, this.y + y1);
    }

    getDistance(point) {
        return Math.sqrt(((this.x - point.x) ** 2) + ((this.y - point.y) ** 2));
    }
}
// Фігура складається з довільної кількості точок (...point)
class Shape {
    constructor(...points) {
        this._points = points;
    }
}

class Polygon extends Shape {
    constructor(...points) {
        super(points);
        this._points = points;
    }

    perimeter() {
        let sum = 0;
        if (this._points.length >= 1) {
            for (let i = 0; i < this._points.length - 1; i++) {
            	sum += this._points[i].getDistance(this._points[i + 1]);
            }
        }
        return sum;
    }
}

class Rectangle extends Polygon {
    constructor(...points) {
        super(points);
        this._points = points;
        if (this._points.length === 4) {
            this._width = this._points[0].getDistance(this._points[1]);
            this._height = this._points[1].getDistance(this._points[3]);
        }
    }

    area() {
    	return this._height * this._width;
    }

    perimeter() {
        return 2 * (this._width + this._height);
    }
}

class Square extends Rectangle {
    constructor(width) {
        super(width);
        this._width = width;
    }

    area() {
        return this._width ** 2;
    }

    perimeter() {
        return 4 * this._width;
    }
}

class Circle extends Shape {
    constructor(center, radius) {
    	super();
        this._center = center;
        this._radius = radius;
    }

    area() {
    	return Math.PI * this._radius * this._radius;
    }

    perimeter() {
        return 2 * Math.PI * this._radius;
    }
}


const point1 = new Point(10, 20);
const point2 = new Point(3, 4);
const point3 = new Point(8, 9);
const point4 = new Point(5, 3);
const shape = new Shape(point1, point1, point2); //  набір точок (можливо його
// (об'єкт shape) краще передавати, ніж масив точок?)
console.log(shape._points);
const polygon = new Polygon(point1, point2, point3, point4); // передаємо точки
console.log(polygon); // перевірка
console.log(polygon.perimeter()); // Знаходимо периметр  точок
const point5 = new Point(1, 1); // Створимо точки саме для прямокутника
const point6 = new Point(1, 5); // щоб зручно було перевіряти
const point7 = new Point(8, 1); // отже, сторони будуть 4 на 7 см
const point8 = new Point(8, 5);
const rectangle = new Rectangle(point5, point6, point7, point8); // створимо сам прямокутник
console.log(rectangle); // перевірка
console.log(rectangle.area()); // площа отримана правильно (4 * 7 = 28)
console.log(rectangle.perimeter()); // периметр отриманий вірно ( 2 * (4 + 7) = 22)
// змінимо існуючі точки прямокутника
point7.x = 5; point7.y = 1;
point8.x = 5; point8.y = 5;
const square = new Square(rectangle._width); // створимо квадрат 4 на 4 см,
// взявши сторону прямокутника
console.log(square); // перевірка
console.log(square.area()); // площа отримана правильно (4^2 = 16)
console.log(square.perimeter()); // периметр отриманий вірно ( 4 * 4 = 16)
const point9 = new Point(0, 0); // точка центра кола
const circle = new Circle(point9, 4); // створимо коло( центр, радіус)
console.log(circle); // перевірка
console.log(circle.area()); // значення з онлайн-калькулятором зійшлося
console.log(circle.perimeter()); // значення з онлайн-калькулятором зійшлося


// new points
Shapes = {
    shape,
    polygon,
    rectangle,
    square,
    circle,
    point1,
    point2,
    point3,
    point4,
    point5,
    point6,
    point7,
    point8,
    point9,
};
