function PowerSocket(name){
    this.connection = `Socket`,
        this.name = name
}


PowerSocket.prototype.turnOnPowerEnergy = function(PowerEnergy) {
    console.log(`Power consumption is ${PowerEnergy} W`)
}

PowerSocket.prototype.turnOffPowerEnergy = function() {
    console.log(`Device is off. Power consumption is 0 W`)
}

function Computer(name, where){
    this.name = name,
        this.location = where,
        this.turnOffPowerEnergy = function() {
            console.log(`${name} is off. Power consumption is 0 W`)
        }
}

function Lamp(name, color){
    this.name = name,
        this.color = color
}


Computer.prototype = new PowerSocket()
Lamp.prototype = new PowerSocket()


const laptop = new Computer("Laptop", `the table`)
const diodLamp = new Lamp('Diod', 'red')

laptop.turnOnPowerEnergy(120)
diodLamp.turnOnPowerEnergy(10)
laptop.turnOffPowerEnergy()
diodLamp.turnOffPowerEnergy()
