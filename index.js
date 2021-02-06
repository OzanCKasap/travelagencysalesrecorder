Agent = class {
    constructor(name) {
        this.name = name
    }
    greet(tourist) {
        console.log("Greetings " + tourist.name + "! My name is " + this.name + ".")
    }
    sell(tourist) {
        console.log("Dear " + tourist.name + ", I booked you a flight to " + tourist.destination.name + "!")
    }
};

Destination = class {
    constructor(name) {
        this.name = name
        this.travellers = []
    }
    travellersList() {
        this.travellers.forEach(printName)
    }
};

Tourist = class {
    constructor(name) {
        console.log("Hi, my name is", name + ".")
        this.name = name
    }
    travel(destination) {
        this.destination = destination
        destination.travellers.push(this)
        console.log("I would like to go to " + destination.name + "!")
    }
    ask(agent) {
        console.log("Dear", agent.name + ", can you help me?")
    }
    thank(agent) {
        console.log("Alright, thank you " + agent.name + "! Have a nice day.")
    }
    // bookings(destinations) {
    //     this.destinations = destinations
    //     destinations = []
    // }
};

printName = tourist => console.log(tourist.name);

paris = new Destination('Paris');
berlin = new Destination('Berlin');
newYorkCity = new Destination('New York City');

hasan = new Agent('Hasan');

ozan = new Tourist('Ozan');
hasan.greet(ozan);
ozan.ask(hasan);
ozan.travel(paris);
hasan.sell(ozan);
ozan.thank(hasan);

aydın = new Tourist('Aydın');
hasan.greet(aydın);
aydın.ask(hasan);
aydın.travel(berlin);
hasan.sell(aydın);
aydın.thank(hasan);

alper = new Tourist('Alper');
hasan.greet(alper);
alper.ask(hasan);
alper.travel(newYorkCity);
hasan.sell(alper);
alper.thank(hasan);

alphan = new Tourist('Alphan');
hasan.greet(alphan);
alphan.ask(hasan);
alphan.travel(newYorkCity);
hasan.sell(alphan);
alphan.thank(hasan);