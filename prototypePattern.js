// using Object create as was recommend by ES5 standard

const car = {
    noOfWheels: 4,
    start () {
        return 'started';
    },
    stop () {
        return 'stopped'
    }
}

// OBject.create(proto[, propertiesObject])

const myCar = Object.create(car, {owner: { value: 'Daniel'}});

console.log('proto', myCar.__proto__ === car)

console.log(myCar)
console.log(car)