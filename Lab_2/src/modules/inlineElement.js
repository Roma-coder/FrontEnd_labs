const wapperClassName = 'inlineElement'; 

export default class InlineElement {
    constructor(inputType, label, isValidFunc) {
        
        this.wrapper = document.createElement('div');
        this.wrapper.className = wapperClassName;

        this.label = document.createElement('label');
        this.label.textContent = label;

        this.input = document.createElement('input');
        this.input.type = inputType;

        this.isValid = false;
        this.input.onchange = () => this.isValid = isValidFunc(this.value());
        
        this.wrapper.append(this.label, this.input);
    }

    value() {
        return this.input.value;
    }

    render(parentNode) {
        return parentNode.append(this.wrapper);
    }
}