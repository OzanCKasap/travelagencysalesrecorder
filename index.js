const Tourist = require('./Tourist');
const Destination = require('./Destination');
const Agent = require('./Agent');
const Database = require('./database');
const Chalk = require('chalk');

printName = tourist => console.log(tourist.name);

//Tours in sales: 

paris = new Destination('Paris');
berlin = new Destination('Berlin');
newYorkCity = new Destination('NYC');

//Travel consultant in charge: 

hasan = new Agent('Hasan');

//Customer interactions: 

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

//Booking record: 

paris.travellersList();
Database.save('savedListParis.json', paris);
const savedListParis = Database.load('savedListParis.json');
console.log(Chalk.bgBlue.bold("The list of all travellers going to Paris was saved in: savedList" + savedListParis.name + ".json"));

berlin.travellersList();
Database.save('savedListBerlin.json', berlin);
const savedListBerlin = Database.load('savedListBerlin.json');
console.log(Chalk.bgBlue.bold("The list of all travellers going to Paris was saved in: savedList" + savedListBerlin.name + ".json"));


newYorkCity.travellersList();
Database.save('savedListNYC.json', newYorkCity);
const savedListNYC = Database.load('savedListNYC.json');
console.log(Chalk.bgBlue.bold("The list of all travellers going to Paris was saved in: savedList" + savedListNYC.name + ".json"));
