// traditional function-based syntax

// function Hero(name, specialAbility) {
//     // setting property values
//     this.name = name;
//     this.specialAbility = specialAbility

//     // declaring a method on the object
//     this,getDetails = function () {
//         return `${this.name} can ${this.specialAbility}`
//     }
// }

// ES6 Class syntax
class Hero {
    constructor(name, specialAbility) {
        // setting property values
        this.name = name;
        this.specialAbility = specialAbility
        // declaring a method on the object
        this.getDetails = function() {
            return `${this.name} can ${this.specialAbility}`
        }
    }
}

const superMan = new Hero('Superman', 'fly');

console.log(superMan.getDetails());