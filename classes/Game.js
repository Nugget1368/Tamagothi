import { Cat, Fox, Panda, Toilet } from "./Pet.js"
import { Builder } from "../builders/Builder.js";
import { chatBubble } from "./ChatBubble.js";

export class Game {
    static renderPet = (pet = {}) => {
        Builder.buildPet(pet);
        Game.setPetBtnActions(pet);
        console.log(pet);
        Game.setStatBar("energy", pet);
        Game.setStatBar("happiness", pet);
        Game.setStatBar("fullness", pet);
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
        let napBtn = article.querySelector(`button#Nap-${pet.name}`);
        let playBtn = article.querySelector(`button#Play-${pet.name}`);
        let feedBtn = article.querySelector(`button#Feed-${pet.name}`);

        napBtn.addEventListener("click", () => {
            let response = pet.nap();
            chatBubble.displayText(`bubble-${pet.name}`, response);
            this.updatePetValues(pet);
        });
        playBtn.addEventListener("click", () => {
            let response = pet.play();
            chatBubble.displayText(`bubble-${pet.name}`, response);
            this.updatePetValues(pet);
        });
        feedBtn.addEventListener("click", () => {
            let response = pet.eat();
            chatBubble.displayText(`bubble-${pet.name}`, response);
            this.updatePetValues(pet);
        });
    }

    static updatePetValues = (pet = {}) => {
        let article = document.querySelector(`article#pet-${pet.name}`);
        let energy = article.querySelector("label.energy");
        let fullness = article.querySelector("label.fullness");
        let happiness = article.querySelector("label.happiness");
        energy.textContent = `Energy: ${pet.energy}`;
        this.setStatBar("energy", pet);
        fullness.textContent = `Fullness: ${pet.fullness}`;
        this.setStatBar("fullness", pet);
        happiness.textContent = `Happiness: ${pet.happiness}`;
        this.setStatBar("happiness", pet);
    }

    static setStatBar = (statName = "", pet = {}) => {
        let stat = document.querySelector(`#${statName}-bar-${pet.name} .fill`);
        stat.style.width = `${pet[statName]}%`;
    }
}