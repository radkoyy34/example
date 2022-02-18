// let title = "Titanic";
//
// let newTitle = "Titanic 2";
//  type User = {
//      id:number,
//      first_name:string,
//      last_name: string,
//      is_active?: boolean
//  }
//  let user: User = {
//      id: 1,
//      first_name: "Radoslav",
//      last_name: "Ivanov",
//      is_active:true,
//  }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// let spidermanFarFromHome:Movie = {
//     id:1,
//     title: "Spiderman Far From Home",
//     director:  "Sergei Alekov",
//     duration: 160,
//     genre: MOVIE_GENRE.ACTION
// }
//
// let spidermanHomeComming:Movie = {
//     id:1,
//     title: "Spiderman Far From Home",
//     director:  "Sergei Alekov",
//     duration: 160,
//     genre: MOVIE_GENRE.ACTION
// }
// console.log(spidermanFarFromHome)
var CAR_TYPE;
(function (CAR_TYPE) {
    CAR_TYPE["COMBI"] = "combi";
    CAR_TYPE["CABRIOLET"] = "cabriolet";
})(CAR_TYPE || (CAR_TYPE = {}));
var car = /** @class */ (function () {
    function car() {
        this.type = CAR_TYPE.COMBI;
    }
    car.prototype.setType = function (type) {
        this.type = type;
    };
    car.prototype.getType = function () {
        return this.type;
    };
    return car;
}());
var car = new car();
car.setType(CAR_TYPE.CABRIOLET);
console.log(car.getType());
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Audi;
}(car));
