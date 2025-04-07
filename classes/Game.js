import { Cat, Fox, Panda, Toilet } from "./Pet.js"
import { Builder } from "../builders/Builder.js";
import { chatBubble } from "./ChatBubble.js";
import { DOM } from "./DOM.js";
import { Timer } from "./Timer.js";

export class Game {
    constructor() {
        this.pets = [];
    }

    renderPet = (pet = {}) => {
        Builder.buildPet(pet);
        this.setPetBtnActions(pet);
        DOM.updatePetValues(pet);
    }

    startGame = () => {
        // Build stored pets
        if (this.pets.length > 0) {
            this.pets.forEach((pet) => {
                this.renderPet(pet);
            });
        };
        let categories = [new Cat, new Fox, new Panda, new Toilet].map((pet) => pet.type);
        Builder.buildCategories([...categories]);
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
            else {
                chatBubble.displayText(`bubble-${this.pets[0].id}`, `Slow down partner! You can only have 4 pets at a time!`);
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
        Timer.statsTimer(pet);
        return pet;
    }

    setPetBtnActions = (pet = {}) => {
        let article = document.querySelector(`article#${pet.id}`);
        let napBtn = article.querySelector(`button#Nap-${pet.id}`);
        let playBtn = article.querySelector(`button#Play-${pet.id}`);
        let feedBtn = article.querySelector(`button#Feed-${pet.id}`);

        napBtn.addEventListener("click", () => {
            let response = pet.nap();
            chatBubble.displayText(`bubble-${pet.id}`, response);
            DOM.updatePetValues(pet);
            Builder.buildHistory(response);
            if (response.includes("ran away.")) {
                DOM.removePet(this.pets, pet);
            }
        });
        playBtn.addEventListener("click", () => {
            let response = pet.play();
            chatBubble.displayText(`bubble-${pet.id}`, response);
            DOM.updatePetValues(pet);
            Builder.buildHistory(response);
            if (response.includes("ran away.")) {
                DOM.removePet(this.pets, pet);
            }
        });
        feedBtn.addEventListener("click", () => {
            let response = pet.eat();
            chatBubble.displayText(`bubble-${pet.id}`, response);
            DOM.updatePetValues(pet);
            Builder.buildHistory(response);
            if (response.includes("ran away.")) {
                DOM.removePet(this.pets, pet);
            }
        });
    }
}