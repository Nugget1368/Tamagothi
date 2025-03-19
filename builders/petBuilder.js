export const buildPet = (pet) => {
    let article = document.createElement("article");
    article.classList.add("tamagothi");
    let img = document.createElement("img");
    img.src = pet.img;
    let name = document.createElement("label");
    name.textContent = `Name: ${pet.name}`;
    let energy = document.createElement("label");
    energy.textContent = `Energy: ${pet.energy}`;
    let fullness = document.createElement("label");
    fullness.textContent = `Fullness: ${pet.fullness}`;
    let div = document.createElement("div");
    div.append(img, name, energy, fullness);
    article.append(div);
    let section = document.querySelector("main section");
    section.append(article);
}