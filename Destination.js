module.exports = class Destination {
    constructor(name) {
        this.name = name
        this.travellers = []
    }
    travellersList() {
        console.log("The following tourist(s) is/are travelling to " + this.name + ":")
        this.travellers.forEach(printName)
    }
};