module.exports = class Tourist {
    constructor(name) {
        console.log("Hi, my name is", name + ".")
        this.name = name
        this.destinations = []
    }
    travel(agent, destination) {
        this.destinations.push(destination.name)
        destination.travellers.push(this)
        console.log("Dear", agent.name + ", can you help me? I would like to go to " + destination.name + "!")
    }
    thank(agent) {
        console.log("Alright, thank you " + agent.name + "! Have a nice day.")
    }
};