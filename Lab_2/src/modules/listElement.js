export default class ListElement {


    constructor(wrapperClassName,labelName) {
        

        this.wrapper = document.createElement('div');
        this.wrapper.className = wrapperClassName;

        this.innerWrapper = document.createElement('div');
        this.innerWrapper.className = 'inner';


        this.label = document.createElement('label');
        this.label.textContent = labelName;

       
        
        this.itemsWrapper = document.createElement('div');
        this.itemsWrapper.className = 'itemsWrapper'; 
        
        this.innerWrapper.append(this.label, this.itemsWrapper);
       

        this.items = [];

        this.wrapper.append(this.innerWrapper);
    }

    render(parentNode) {
        parentNode.appendChild(this.wrapper);
    }

    values() {
        return this.items.map(item => item.value());
    }

}