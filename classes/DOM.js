import { Builder } from "../builders/Builder.js";
export class DOM {
    static removePet(pets = [], pet = {}) {
        pets.splice(pets.indexOf(pet), 1);
        let article = document.querySelector(`article#pet-${pet.name}`);
        if (article) {
            article.remove();
            Builder.buildHistory(`You abandoned ${pet.type} ${pet.name}.`);
        }
    }

    static updatePetValues(pet = {}) {
        let article = document.querySelector(`article#pet-${pet.name}`);
        let values = ["energy", "fullness", "happiness"];
        if (article) {
            values.forEach((v) => {
                article.querySelector(`label.${v}`).textContent = `${v.charAt(0).toUpperCase() + v.slice(1)}: ${pet[v]}`;
                article.querySelector(`#${v}-bar-${pet.name} .fill`).style.width = `${pet[v]}%`;
            })
        }
    }
}