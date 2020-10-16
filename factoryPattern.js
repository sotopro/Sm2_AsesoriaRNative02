class BallFactory {
    constructor() {
        this.createBall = function(type) {
            let ball;
            if( type === 'football' || type === 'soccer') ball = new Football();
            else if (type == 'basketball') ball = new Basketball();
            ball.roll = function() {
                return `The ${this._type} is rolling`;
            }

            return ball;
        }
    }
}

class Football {
    constructor() {
        this._type = 'football';
        this.kick = function() {
            return 'You kicked the football'
        }
    }
}

class Basketball {
    constructor() {
        this._type = 'basketball';
        this.bounce = function() {
            return 'You bounced the basketball'
        }
    }
}

// creating objects
const factory = new BallFactory();

const myFootball = factory.createBall('football');
const myBasketball = factory.createBall('basketball');

console.log('football roll', myFootball.roll());
console.log('basketball roll', myBasketball.roll());
console.log('football kick', myFootball.kick());
console.log('basketball bounce', myBasketball.bounce());