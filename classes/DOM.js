import { Builder } from "../builders/Builder.js";
export class DOM {
    static removePet(pets = [], pet = {}) {
        console.log(pets);
        let index = pets.indexOf(pet);
        console.log(index);
        if(index > -1){
            pets.splice(index, 1);
        }
        console.log(pets);
        let article = document.querySelector(`article#${pet.id}`);
        if (article) {
            article.remove();
            Builder.buildHistory(`You abandoned ${pet.type} ${pet.name}.`);

        }
    }

    static updatePetValues(pet = {}) {
        let article = document.querySelector(`article#${pet.id}`);
        let values = ["energy", "fullness", "happiness"];
        if (article) {
            values.forEach((v) => {
                article.querySelector(`label.${v}`).textContent = `${v.charAt(0).toUpperCase() + v.slice(1)}: ${pet[v]}`;
                article.querySelector(`#${v}-bar-${pet.id} .fill`).style.width = `${pet[v]}%`;
            })
        }
    }
}