import { DOM } from "./DOM.js";
import { chatBubble } from "./ChatBubble.js";

export class Timer {
    static statsTimer(pets = [], pet = {}) {
        let intervalId = setInterval(() => {
            if (pet) {
                pet.decreaseAllValues();
                chatBubble.displayText(`bubble-${pet.id}`, pet.growl());
                DOM.updatePetValues(pet);
                if (pet && (!pet.checkValues())) {
                    DOM.removePet(pets, pet);
                    clearInterval(intervalId);
                };
            }
            else {
                clearInterval(intervalId);
            }
        }, 10000);
    }
}