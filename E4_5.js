class PowerSocket{
    constructor(name){
        this.connection = `Socket`;
        this.nameOwn = name || 'Device somethink';
    }

    turnOnPowerEnergy(PowerEnergy){
        console.log(`Power consumption is ${PowerEnergy} W`)
    }

    turnOffPowerEnergy(){
        console.log(`Device is off. Power consumption is 0 W`)
    }
}

class Computer extends PowerSocket {
    constructor(name, where, nameOwn){
        super(nameOwn);
        this.name = name ? name : nameOwn;
        this.location = where;
    }

    turnOffPowerEnergy() {
        return console.log(`${this.name} is off. Power consumption is 0 W`)
    }
}

class Lamp extends PowerSocket {
    constructor(name, color, nameOwn){
        super(nameOwn);
        this.name = name;
        this.color = color;
    }

    turnOffPowerEnergy() {
        if (this.color == "red"){
            return console.log(`${this.name} of ${this.color} is off. Power consumption is 0 W`);
        } else {
            return super.turnOffPowerEnergy();
        }
    }
}

const laptop = new Computer("Laptop", `the table`)
const diodLamp = new Lamp('Diod', 'red')

laptop.turnOnPowerEnergy(120)
diodLamp.turnOnPowerEnergy(10)
laptop.turnOffPowerEnergy()
diodLamp.turnOffPowerEnergy()
