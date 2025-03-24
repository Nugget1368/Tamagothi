import { Cat, Fox, Panda, Toilet } from "./Pet.js"
import { Builder } from "../builders/Builder.js";
import { chatBubble } from "./ChatBubble.js";

export class Game {
    constructor() {
        this.pets = [];
    }

    renderPet = (pet = {}) => {
        Builder.buildPet(pet);
        this.setPetBtnActions(pet);
        this.setStatBar(["energy", "fullness", "happiness"], pet);
    }

    startGame = () => {
        // Build stored pets
        if (this.pets.length > 0) {
            this.pets.forEach((pet) => {
                this.renderPet(pet);
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
            let pet = this.addPet();
            if (this.pets.length < 4) {
                this.pets.push(pet);
                this.renderPet(pet);
                Builder.buildHistory(`Adopted ${pet.type} ${pet.name} as your pet.`);
            }
            else{
                chatBubble.displayText(`bubble-${this.pets[0].name}`, `Slow down partner! You can only have 4 pets at a time!`);
                Builder.buildHistory(`Could not adopt ${pet.type} ${pet.name}. You can only have 4 pets at a time.  But you can always kill one to get more room ;)`);
            }
            modal.close();
        });
    }

    addPet = () => {
        let name = document.querySelector("#name").value;
        let type = document.querySelector("#type").value;
        let pet = {};
        if (type == "Cat")
            pet = new Cat(name, this.pets);
        else if (type == "Fox")
            pet = new Fox(name, this.pets);
        else if (type == "Panda")
            pet = new Panda(name, this.pets);
        else if (type == "Toilet")
            pet = new Toilet(name, this.pets);
        this.statsTimer(pet);
        return pet;
    }

    setPetBtnActions = (pet = {}) => {
        let article = document.querySelector(`article#pet-${pet.name}`);
        let napBtn = article.querySelector(`button#Nap-${pet.name}`);
        let playBtn = article.querySelector(`button#Play-${pet.name}`);
        let feedBtn = article.querySelector(`button#Feed-${pet.name}`);

        napBtn.addEventListener("click", () => {
            let response = pet.nap();
            chatBubble.displayText(`bubble-${pet.name}`, response);
            this.updatePetValues(pet);
            Builder.buildHistory(response);
            if (response.includes("ran away.")) {
                this.removePet(pet);
            }
        });
        playBtn.addEventListener("click", () => {
            let response = pet.play();
            chatBubble.displayText(`bubble-${pet.name}`, response);
            this.updatePetValues(pet);
            Builder.buildHistory(response);
            if (response.includes("ran away.")) {
                this.removePet(pet);
            }
        });
        feedBtn.addEventListener("click", () => {
            let response = pet.eat();
            chatBubble.displayText(`bubble-${pet.name}`, response);
            this.updatePetValues(pet);
            Builder.buildHistory(response);
            if (response.includes("ran away.")) {
                this.removePet(pet);
            }
        });
    }

    updatePetValues = (pet = {}) => {
        let article = document.querySelector(`article#pet-${pet.name}`);
        let energy = article.querySelector("label.energy");
        let fullness = article.querySelector("label.fullness");
        let happiness = article.querySelector("label.happiness");
        energy.textContent = `Energy: ${pet.energy}`;
        fullness.textContent = `Fullness: ${pet.fullness}`;
        happiness.textContent = `Happiness: ${pet.happiness}`;
        this.setStatBar(["energy", "fullness", "happiness"], pet);
    }

    statsTimer(pet = {}){
        let intervalId = setInterval(() => {
           pet.energy -= 15;
           pet.fullness -= 15; 
           pet.happiness -= 15;
           this.updatePetValues(pet);
           if(!pet.checkValues()){
            this.removePet(pet);
            clearInterval(intervalId);
           };
        }, 10000);
    }

    setStatBar = (statNames = [], pet = {}) => {
        statNames.forEach((statName) => {
            let stat = document.querySelector(`#${statName}-bar-${pet.name} .fill`);
            stat.style.width = `${pet[statName]}%`;
        })
    }

    removePet = (pet = {}) => {
        this.pets.splice(this.pets.indexOf(pet), 1);
        let article = document.querySelector(`article#pet-${pet.name}`);
        article.remove();
        Builder.buildHistory(`You abandoned ${pet.type} ${pet.name}.`);
    }
}