export class Builder {

    static buildPet = (pet) => {
        let article = document.createElement("article");
        article.classList.add("tamagotchi");
        article.setAttribute("id", `${pet.id}`);
        let picture = document.createElement("picture");
        let img = document.createElement("img");
        img.src = pet.img;
        picture.append(img);
        let name = document.createElement("label");
        name.textContent = `Name: ${pet.name}`;
        let energy = document.createElement("label");
        energy.classList.add("energy");
        energy.textContent = `Energy: ${pet.energy}`;
        let energyBar = this.buildStatBar("energy", pet.id);
        let fullness = document.createElement("label");
        fullness.classList.add("fullness");
        fullness.textContent = `Fullness: ${pet.fullness}`;
        let fullnessBar = this.buildStatBar("fullness", pet.id);
        let happiness = document.createElement("label");
        happiness.classList.add("happiness");
        happiness.textContent = `Happiness: ${pet.happiness}`;
        let happinessBar = this.buildStatBar("happiness", pet.id);
        let div = document.createElement("div");
        let content = document.createElement("div");
        content.classList.add("content");
        content.append(name, energy, energyBar, fullness, fullnessBar, happiness, happinessBar);
        let btns = Builder.buildPetBtns(pet);
        btns.classList.add("btn-container");
        div.append(picture, content, btns);
        let chatBubble = this.buildChatBubble(pet);
        article.append(chatBubble, div);
        let section = document.querySelector("main section[data-pets]");
        section.append(article);
    }

    static buildPetBtns = (pet) => {
        let btnContainer = document.createElement("div");
        for (let x = 0; x < 3; x++) {
            let btn = document.createElement("button");
            let action = x == 0 ? "Nap" : x == 1 ? "Play" : "Feed";
            btn.classList.add("pet-btn");
            let btnId = `${action}-${pet.id}`;
            btn.setAttribute("id", btnId);
            let label = document.createElement("label");
            label.textContent = action;
            let div = document.createElement("div");
            div.append(btn, label);
            btnContainer.append(div);
        }
        return btnContainer;
    }

    static buildChatBubble = (pet) => {
        let bubble = document.createElement("div");
        bubble.setAttribute("id", `bubble-${pet.id}`);
        bubble.classList.add("chat-bubble");
        bubble.classList.add("hide");
        return bubble;
    }

    static buildStatBar = (stat = "", id = "") => {
        let statBar = document.createElement("div");
        statBar.classList.add("stat-bar");
        statBar.setAttribute("id", `${stat}-bar-${id}`);
        let fill = document.createElement("div");
        fill.classList.add("fill");
        statBar.append(fill);
        return statBar;
    }
    static buildHistory = (text) => {
        let li = document.createElement("li");
        li.textContent = text;
        let ul = document.querySelector("#history");
        ul.append(li);
    }

    static buildCategories = (categories = []) =>{
        let select = document.querySelector("select#type");
        categories.forEach((category) =>{
            let li = document.createElement("option");
            li.innerHTML = `<label>${category}</label>`;
            select.append(li);
        });
    }
}
