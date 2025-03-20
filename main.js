import { Cat, Fox, Panda, Toilet } from "./classes/Pet.js"
import { buildPet } from "./builders/petBuilder.js";
import { Modal } from "./classes/Modal.js";

let pets = [];
let cat = new Cat("Mira Mus");
pets.push(cat);
pets.forEach((pet) => {
    buildPet(pet);
});

let modal = document.querySelector("dialog[data-modal]");

let openModalBtn = document.querySelector("button[data-open-modal]");
openModalBtn.addEventListener("click", () => modal.showModal());
let closeModalBtn = document.querySelector("[data-close-modal]");
console.log(closeModalBtn);
closeModalBtn.addEventListener("click", () => modal.close());
console.log("hello?");