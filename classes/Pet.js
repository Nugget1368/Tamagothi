export class Pet {
    constructor(name = "Nameless") {
        this.name = name;
        this.energy = 50;
        this.fullness = 50;
        this.happiness = 50;
    }

    nap() {
        this.energy += 40;
        this.happiness -= 10;
        this.fullness -= 10;
        checkValues();
        return `You took a nap with ${this.name}.`;
    }

    play() {
        this.energy -= 10;
        this.happiness += 30;
        this.fullness -= 10;
        checkValues();
        return `You played with ${this.name}.`;
    }

    eat() {
        this.energy -= 15;
        this.happiness += 5;
        this.fullness += 30;
        checkValues();
        return `You fed ${this.name}.`;
    }

    checkValues() {
        // If any value is under 0, set it to 0
        if (this.energy < 0)
            this.energy = 0;
        if (this.fullness < 0)
            this.fullness = 0;
        if (this.happiness < 0)
            this.happiness = 0;
        // If any value is over 100, set it to 100
        if (this.energy > 100)
            this.energy = 100;
        if (this.fullness > 100)
            this.fullness = 100;
        if (this.happiness > 100)
            this.happiness = 100;
    }
}

export class Cat extends Pet {
    constructor(name = "Nameless") {
        super(name);
        this.type = "Cat";
        this.img = "./images/pokeball.svg";
    }

    growl() {
        return "Mjau";
    }
}

export class Fox extends Pet {
    constructor(name = "Nameless") {
        super(name);
        this.type = "Fox";
        this.img = "";
    }

    growl() {
        return "What does the fox say?";
    }
}

export class Panda extends Pet {
    constructor(name = "Nameless") {
        super(name);
        this.type = "Fox";
        this.img = "";
    }

    growl() {
        return "Nom, nom.";
    }
}

export class Toilet extends Pet {
    constructor(name = "Nameless") {
        super(name);
        this.type = "Toilet";
        this.img = "";
    }

    growl() {
        return "Flush!";
    }
}