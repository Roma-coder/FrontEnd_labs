import Item from './item';
import ItemAdder from './itemAdder';
import ListElement from './listElement';

const phoneNumberItemsClass = 'phoneNumItem';

export default class PhoneNumberList extends ListElement{


    constructor(wrapperClassName,labelName) {
        
        super(wrapperClassName, labelName);

        this.itemAdder = new ItemAdder('itemAdder', value => { 
            const item = new Item(item => this.items.pop(item), value, phoneNumberItemsClass);
            item.render(this.itemsWrapper);
            this.items.push(item);
        }, (value) => {
            const validatingRule = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
            return validatingRule.test(value);
            
        });

        this.itemAdder.render(this.wrapper);
    }

}