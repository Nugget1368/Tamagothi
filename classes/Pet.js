export class Pet{
    constructor(name = "Nameless"){
        this.name = name;
        this.energy = 50;
        this.fullness = 50;
        this.happiness = 50;
    }
}

export class Cat extends Pet{
    constructor(name = "Nameless"){
        super(name);
        this.type = "Cat";
        this.img = "";
    }

    growl(){
        return "Mjau";
    }
}

export class Fox extends Pet{
    constructor(name = "Nameless"){
        super(name);
        this.type = "Fox";
        this.img = "";
    }

    growl(){
        return "What does the fox say?";
    }
}

export class Panda extends Pet{
    constructor(name = "Nameless"){
        super(name);
        this.type = "Fox";
        this.img = "";
    }

    growl(){
        return "Nom, nom.";
    }
}

export class Toilet extends Pet{
    constructor(name = "Nameless"){
        super(name);
        this.type = "Toilet";
        this.img = "";
    }

    growl(){
        return "Flush!";
    }
}