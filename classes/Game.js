import { Cat, Fox, Panda, Toilet } from "./Pet.js"
import { Builder } from "../builders/Builder.js";

export class Game {
    static renderPet = (pet = {}) => {
        Builder.buildPet(pet);
        Game.setPetBtnActions(pet);
    }

    static startGame = (pets = []) => {
        // Build stored pets
        if (pets.length > 0) {
            pets.forEach((pet) => {
                Game.renderPet(pet);
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
            Game.renderPet(pet);
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

    static setPetBtnActions = (pet = {}) => {
        let article = document.querySelector(`article#pet-${pet.name}`);
        console.log(article);
        let napBtn = article.querySelector(`button#Nap-${pet.name}`);
        console.log(napBtn);
        let playBtn = article.querySelector(`button#Play-${pet.name}`);
        let feedBtn = article.querySelector(`button#Feed-${pet.name}`);

        napBtn.addEventListener("click", () => {
            pet.nap();
            console.log(pet);
            this.updatePetValues(pet);
        });
        playBtn.addEventListener("click", () => {
            pet.play();
            console.log(pet);
            this.updatePetValues(pet);
        });
        feedBtn.addEventListener("click", () => {
            pet.eat();
            console.log(pet);
            this.updatePetValues(pet);
        });
    }

    static updatePetValues = (pet = {}) => {
        let article = document.querySelector(`article#pet-${pet.name}`);
        let energy = article.querySelector("label:nth-child(2)");
        let fullness = article.querySelector("label:nth-child(3)");
        let happiness = article.querySelector("label:nth-child(4)");
        energy.textContent = `Energy: ${pet.energy}`; 
        fullness.textContent = `Fullness: ${pet.fullness}`; 
        happiness.textContent = `Happiness: ${pet.happiness}`; 
    }
}