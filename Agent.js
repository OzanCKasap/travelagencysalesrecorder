module.exports = class Agent {
    constructor(name) {
        this.name = name
    }
    greet(tourist) {
        console.log("Greetings " + tourist.name + "! My name is " + this.name + ".")
    }
    sell(tourist) {
        console.log("Dear " + tourist.name + ", I booked you a flight to your desired destination. Have a good one!")
    }
};