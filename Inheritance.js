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
var Animal = /** @class */ (function () {
    function Animal(name, age, sound) {
        this.name = name;
        this.age = age;
        this.sound = sound;
    }
    Animal.prototype.makeSound = function () {
        console.log(this.sound);
    };
    return Animal;
}());
var Mammal = /** @class */ (function (_super) {
    __extends(Mammal, _super);
    function Mammal(name, age, sound, numberOfLegs) {
        var _this = _super.call(this, name, age, sound) || this;
        _this.numberOfLegs = numberOfLegs;
        return _this;
    }
    Mammal.prototype.giveBirth = function () {
        console.log("".concat(this.name, " gives birth to live young."));
    };
    return Mammal;
}(Animal));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name, age, sound, wingspan) {
        var _this = _super.call(this, name, age, sound) || this;
        _this.wingspan = wingspan;
        return _this;
    }
    Bird.prototype.fly = function () {
        console.log("".concat(this.name, " takes off into the sky!"));
    };
    return Bird;
}(Animal));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name, age, sound, habitat) {
        var _this = _super.call(this, name, age, sound) || this;
        _this.habitat = habitat;
        return _this;
    }
    Fish.prototype.swim = function () {
        console.log("".concat(this.name, " swims through the ").concat(this.habitat, "."));
    };
    return Fish;
}(Animal));
// Example usage:
var dog = new Mammal("Buddy", 5, "woof", 4);
dog.makeSound(); // Output: "woof"
dog.giveBirth(); // Output: "Buddy gives birth to live young."
var eagle = new Bird("Aquila", 3, "screech", 72);
eagle.makeSound(); // Output: "screech"
eagle.fly(); // Output: "Aquila takes off into the sky!"
var salmon = new Fish("Sammy", 2, "blub", "river");
salmon.makeSound(); // Output: "blub"
salmon.swim(); // Output: "Sammy swims through the river."
