export default class ItemAdder {
    constructor(wrapperClassName, onClickHandler, validateFunc) {
        
        this.button = document.createElement('button');
        this.button.textContent = 'Add';
        this.button.disabled = true;
        this.button.onclick = () => onClickHandler(this.input.value);

        this.input = document.createElement('input');
        this.input.oninput = () => this.button.disabled = ! validateFunc(this.input.value);
        
        this.wrapper = document.createElement('div');
        this.wrapper.className = wrapperClassName;
        this.wrapper.append(this.input, this.button);
        
        this.input.addEventListener("keyup", event =>  {
            if (event.key == 'Enter') this.button.click();
        });
    }

    render(parentNode) {
        parentNode.appendChild(this.wrapper);
    }

}