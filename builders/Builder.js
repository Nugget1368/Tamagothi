export class Builder {

    static buildPet = (pet) => {
        let article = document.createElement("article");
        article.classList.add("tamagotchi");
        article.setAttribute("id", `pet-${pet.name}`);
        let picture = document.createElement("picture");
        let img = document.createElement("img");
        img.src = pet.img;
        picture.append(img);
        let name = document.createElement("label");
        name.textContent = `Name: ${pet.name}`;
        let energy = document.createElement("label");
        energy.textContent = `Energy: ${pet.energy}`;
        let fullness = document.createElement("label");
        fullness.textContent = `Fullness: ${pet.fullness}`;
        let happiness = document.createElement("label");
        happiness.textContent = `Happiness: ${pet.happiness}`;
        let div = document.createElement("div");
        let content = document.createElement("div");
        content.append(name, energy, fullness, happiness);
        let btns = Builder.buildPetBtns(pet);
        btns.classList.add("btn-container");
        div.append(picture, content, btns);
        article.append(div);
        let section = document.querySelector("main section[data-pets]");
        section.append(article);
    }

    static buildPetBtns = (pet) => {
        let btnContainer = document.createElement("div");
        for(let x = 0; x < 3; x++) {
            let btn = document.createElement("button");
            let action = x == 0 ? "Nap" : x == 1 ? "Play" : "Feed";
            btn.classList.add("pet-btn");
            let btnId = `${action}-${pet.name}`;
            btn.setAttribute("id", btnId);
            let label = document.createElement("label");
            label.textContent = action;
            let div = document.createElement("div");
            div.append(btn, label);
            btnContainer.append(div);
        }
        return btnContainer;
    }
}
