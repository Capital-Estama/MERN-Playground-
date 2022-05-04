class Ninja {
    constructor(name, speed = 3,strength = 3 ){
        this.Health = 100;
        this.Name = name;
        this.Speed = speed;
        this.Strength = strength;

    }

    sayName() {
        console.log(this.Name);
    }
    showStats(){
        console.log("Name:" + this.Name + "Health:" + this.Health + "Speed:" + this.Speed + "Strength:"+ this.Strength);
    }
    drinkSake(){
        this.Health += 10
    }
}

// Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, and 10 strength by default.
// In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. Finally, add the speakWisdom() method.
// speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.
class Sensei extends Ninja {
    constructor(){
        super()


    }
}



wes = new Ninja("wes");
var name = wes.SayName();
console.log(name);
