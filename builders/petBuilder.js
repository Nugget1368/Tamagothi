export const buildPet = (pet) => {
    let article = document.createElement("article");
    article.classList.add("tamagotchi");
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
    let div = document.createElement("div");
    let content = document.createElement("div");
    content.append(name, energy, fullness);
    div.append(picture, content);
    article.append(div);
    let section = document.querySelector("main section[data-pets]");
    section.append(article);
}