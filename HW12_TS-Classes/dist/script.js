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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Point.prototype, "X", {
        get: function () {
            return this.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "Y", {
        get: function () {
            return this.y;
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.getPointAtOffset = function (x, y) {
        return new Point(this.x + x, this.y + y);
    };
    Point.prototype.getDistance = function (point) {
        return Math.sqrt((Math.pow((this.x - point.x), 2)) + (Math.pow((this.y - point.y), 2)));
    };
    return Point;
}());
// Фігура складається з довільної кількості точок (...point)
var Shape = /** @class */ (function () {
    function Shape() {
        var points = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            points[_i] = arguments[_i];
        }
        this.points = points;
    }
    return Shape;
}());
var Polygon = /** @class */ (function (_super) {
    __extends(Polygon, _super);
    function Polygon() {
        var points = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            points[_i] = arguments[_i];
        }
        var _this = 
        // @ts-ignore
        _super.call(this, points) || this;
        _this.perimeter = 0;
        _this.points = points;
        return _this;
    }
    Polygon.prototype.getPerimeter = function () {
        if (this.points.length >= 1) {
            for (var i = 0; i < this.points.length - 1; i++) {
                this.perimeter += this.points[i].getDistance(this.points[i + 1]);
            }
        }
        return this.perimeter;
    };
    return Polygon;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        var points = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            points[_i] = arguments[_i];
        }
        var _this = 
        // @ts-ignore
        _super.call(this, points) || this;
        _this.points = points;
        if (_this.points.length === 4) {
            _this.width = _this.points[0].getDistance(_this.points[1]);
            _this.height = _this.points[1].getDistance(_this.points[3]);
        }
        return _this;
    }
    Rectangle.prototype.area = function () {
        return this.height * this.width;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}(Polygon));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(width) {
        var _this = 
        // @ts-ignore
        _super.call(this, width) || this;
        _this.width = width;
        return _this;
    }
    Square.prototype.area = function () {
        return Math.pow(this.width, 2);
    };
    Square.prototype.getPerimeter = function () {
        return 4 * this.width;
    };
    return Square;
}(Rectangle));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(center, radius) {
        var _this = _super.call(this) || this;
        _this.center = center;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.perimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}(Shape));
var Shapes = {
    Shape: Shape,
    Polygon: Polygon,
    Rectangle: Rectangle,
    Square: Square,
    Circle: Circle,
    Point: Point
};
