Agent = class {
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

Destination = class {
    constructor(name) {
        this.name = name
        this.travellers = []
    }
    travellersList() {
        console.log("The following tourist(s) is/are travelling to " + this.name + ":")
        this.travellers.forEach(printName)
    }
};

Tourist = class {
    constructor(name) {
        console.log("Hi, my name is", name + ".")
        this.name = name
        this.destinations = []
    }
    travel(agent, destination) {
        this.destinations.push(destination)
        destination.travellers.push(this)
        console.log("Dear", agent.name + ", can you help me? I would like to go to " + destination.name + "!")
    }
    thank(agent) {
        console.log("Alright, thank you " + agent.name + "! Have a nice day.")
    }
};

printName = tourist => console.log(tourist.name)

paris = new Destination('Paris');
berlin = new Destination('Berlin');
newYorkCity = new Destination('New York City');

hasan = new Agent('Hasan');

ozan = new Tourist('Ozan');
hasan.greet(ozan);
ozan.travel(hasan, paris);
hasan.sell(ozan);
ozan.thank(hasan);

aydın = new Tourist('Aydın');
hasan.greet(aydın);
aydın.travel(hasan, berlin);
hasan.sell(aydın);
aydın.thank(hasan);

alper = new Tourist('Alper');
hasan.greet(alper);
alper.travel(hasan, newYorkCity);
hasan.sell(alper);
alper.thank(hasan);

alphan = new Tourist('Alphan');
hasan.greet(alphan);
alphan.travel(hasan, newYorkCity);
hasan.sell(alphan);
alphan.thank(hasan);

paris.travellersList();
berlin.travellersList();
newYorkCity.travellersList();