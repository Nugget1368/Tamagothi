import { DOM } from "./DOM.js";

export class Timer {
    static statsTimer(pet = {}) {
        let intervalId = setInterval(() => {
            if (pet) {
                // chatBubble.displayText(`bubble-${pet.name}`, pet.growl());
                pet.decreaseAllValues();
                DOM.updatePetValues(pet);
                if (pet && (!pet.checkValues())) {
                    DOM.removePet(this.pets, pet);
                    clearInterval(intervalId);
                };
            }
            else {
                clearInterval(intervalId);
            }
        }, 10000);
    }
}