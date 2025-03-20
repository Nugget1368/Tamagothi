import { Cat, Fox, Panda, Toilet } from "./Pet.js"
import { Builder } from "../builders/Builder.js";

export class Game {
    static startGame = (pets = []) => {
        // Build stored pets
        if(pets.length > 0){
            pets.forEach((pet) => {
                Builder.buildPet(pet);
            });
        };
        // Add eventlisteners
        let modal = document.querySelector("dialog[data-modal]");
        let openModalBtn = document.querySelector("button[data-open-modal]");
        openModalBtn.addEventListener("click", () => modal.showModal());
        let closeModalBtn = document.querySelector("[data-close-modal]");
        closeModalBtn.addEventListener("click", () => modal.close());
        let confirmBtn = document.querySelector("dialog[data-modal] button.primary-btn");
        confirmBtn.addEventListener("click", () => {
            let pet = Game.addPet();
            pets.push(pet);
            Builder.buildPet(pet);
            modal.close();
        });
    }

    static addPet = () => {
        let name = document.querySelector("#name").value;
        let type = document.querySelector("#type").value;
        let pet = {};
        if (type == "Cat")
            pet = new Cat(name);
        else if (type == "Fox")
            pet = new Fox(name);
        else if (type == "Panda")
            pet = new Panda(name);
        else if (type == "Toilet")
            pet = new Toilet(name);
        return pet;
    }
}