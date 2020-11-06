import Item from './item';
import ItemAdder from './itemAdder';
import ListElement from './listElement';

const addressItemsClass = 'addressItem';

export default class AddressList extends ListElement{
    constructor(wrapperClassName,labelName) {
        super(wrapperClassName, labelName);
        
        this.itemAdder = new ItemAdder('itemAdder', value => { 
            const item = new Item(item => this.items.pop(item), value, addressItemsClass);
            item.render(this.itemsWrapper);
            this.items.push(item);
        }, value => value.length>10);

        this.itemAdder.render(this.wrapper);
    }
}