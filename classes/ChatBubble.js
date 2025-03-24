export class chatBubble{
    static openBubble = (id) => {
        let bubble = document.querySelector(`.chat-bubble#${id}`);
        bubble.classList.remove("hide");
        return bubble;
    }

    static closeBubble = (id) => {
        let bubble = document.querySelector(`.chat-bubble#${id}`);
        bubble.innerHTML = ``;
        bubble.classList.add("hide");
    }

    static displayText = (id, text = "") =>{
        let bubble = this.openBubble(id);
        bubble.innerHTML = `<p>${text}</p>`;
        setTimeout(() => this.closeBubble(id), 3000);
    }
}