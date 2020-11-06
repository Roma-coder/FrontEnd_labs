export default class Item
{
    constructor(onClickHandler, value, wrapperClassName) {
        

        //Creating text element
        this.label = document.createElement('label');
        this.label.textContent = value;

        
        //Creating delete button
        this.button = document.createElement('button');
        this.button.textContent = "X";
        

        //Wrapping elements 
        this.wrapper = document.createElement('div');
        this.wrapper.append(this.label, this.button);
        this.wrapper.className = wrapperClassName;
        
        this.button.onclick = () => {
            onClickHandler(this);
            this.wrapper.remove();
        }

        this.render = parentNode => parentNode.appendChild(this.wrapper);

        this.value = () => this.label.textContent;
    }    
}