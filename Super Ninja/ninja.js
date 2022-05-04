class Ninja {
    constructor(name, speed = 3,strength = 3,health = 100, ){
        this.Health = health;
        this.Name = name;
        this.Speed = speed;
        this.Strength = strength;

    }

    sayName() {
        console.log(this.Name);
    }
    showStats(){
        console.log("Name: " + this.Name + "\nHealth: " + this.Health + "\nSpeed: " + this.Speed + "\nStrength: "+ this.Strength);
    }
    drinkSake(){
        this.Health += 10
    }
}

// Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, and 10 strength by default.
// In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. Finally, add the speakWisdom() method.
// speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.
class Sensei extends Ninja {
    constructor(name , wisdom = 10){
        super(name,10,10,200)
        this.Wisdom = wisdom;
    }
    SpeakWisdom(){
        this.drinkSake();
        console.log("The quieter you become, the more you are able to hear.");
        this.showStats();
    }
}



wes = new Ninja("wes");
var name = wes.sayName();
console.log(name);

snipes = new Sensei("snipes");
snipes.SpeakWisdom();