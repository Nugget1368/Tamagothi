import { Cat, Fox, Panda, Toilet } from "./classes/Pet.js"
import { buildPet } from "./builders/petBuilder.js";

let pets = [];
let cat = new Cat("Mira Mus");
pets.push(cat);
pets.forEach((pet) => {
    buildPet(pet);
});
