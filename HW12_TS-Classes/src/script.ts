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
    private x: number;
    private y: number;
    get X() {
        return this.x;
    }

    get Y() {
        return this.y;
    }

    constructor(x:number, y:number) {
        this.x = x;
        this.y = y;
    }

    getPointAtOffset(x:number, y:number):Point {
        return new Point(this.x + x, this.y + y);
    }

    getDistance(point:Point):number {
        return Math.sqrt(((this.x - point.x) ** 2) + ((this.y - point.y) ** 2));
    }
}
// Фігура складається з довільної кількості точок (...point)
class Shape {
    protected points: Point[];
    constructor(...points:Array<Point>) {
        this.points = points;
    }
}

class Polygon extends Shape {
    private perimeter=0;
    constructor(...points:Array<Point>) {
        // @ts-ignore
        super(points);
        this.points = points;
    }

    getPerimeter():number {
        if (this.points.length >= 1) {
            for (let i = 0; i < this.points.length - 1; i++) {
                this.perimeter += this.points[i].getDistance(this.points[i + 1]);
            }
        }
        return this.perimeter;
    }
}

class Rectangle extends Polygon {
    protected width: number;
    protected height: number;
    constructor(...points:Array<Point>) {
        // @ts-ignore
        super(points);
        this.points = points;
        if (this.points.length === 4) {
            this.width = this.points[0].getDistance(this.points[1]);
            this.height = this.points[1].getDistance(this.points[3]);
        }
    }

    area():number {
        return this.height * this.width;
    }

    getPerimeter():number {
        return 2 * (this.width + this.height);
    }
}

class Square extends Rectangle {

    constructor(width: number) {
        // @ts-ignore
        super(width);
        this.width = width;
    }

    area():number  {
        return this.width ** 2;
    }

    getPerimeter():number  {
        return 4 * this.width;
    }
}

class Circle extends Shape {
    private center: Point;
    private radius: number;
    constructor(center:Point, radius:number) {
        super();
        this.center = center;
        this.radius = radius;
    }

    area():number  {
        return Math.PI * this.radius * this.radius;
    }

    perimeter():number  {
        return 2 * Math.PI * this.radius;
    }
}

const Shapes = {
    Shape: Shape,
    Polygon: Polygon,
    Rectangle: Rectangle,
    Square: Square,
    Circle: Circle,
    Point: Point
};
