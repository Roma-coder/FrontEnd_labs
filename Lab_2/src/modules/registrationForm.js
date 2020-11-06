import InlineElement from './inlineElement';
import PhoneNumberList from './phoneNumberList';
import AddressList from './addressList';

export default class RegistrationForm {
    constructor(label, wrapperClassName) {
        this.wrapper = document.createElement('div');
        this.wrapper.className = wrapperClassName;

        this.label = document.createElement('label');
        this.label.textContent = label;

        this.stringLength = 5;
        this.checkString = value => value.length > this.stringLength;
        this.checkDate = value => Date.parse(value) < Date.now();

        this.name = new InlineElement('text', 'First Name', this.checkString);
        this.surname = new InlineElement('text', 'Last Name', this.checkString);
        this.birthday = new InlineElement('date', 'Date of birth', this.checkDate);
        this.addresses = new AddressList( 'AddressWrapper', 'Addresses');
        this.phones = new PhoneNumberList('PhoneElemWrapper', 'Phone Numbers');

        this.submit = document.createElement('button');
        this.submit.textContent = 'submit';
        this.submit.onclick = async () => this.isValid() ? await this.sendData() : this.printErrors();

        this.errorsWrapper = document.createElement('ul');
        this.errorsWrapper.className = 'errorsWrapper';

        this.wrapper.append(this.label);
        this.name.render(this.wrapper);
        this.surname.render(this.wrapper);
        this.birthday.render(this.wrapper);
        this.addresses.render(this.wrapper);
        this.phones.render(this.wrapper);
        this.wrapper.append(this.submit, this.errorsWrapper);

        this.render = parentNode => parentNode.appendChild(this.wrapper);
    }

    async sendData() {
        alert('Sent to server');
        this.errorsWrapper.hidden = true;
        const response = await fetch('https://god.com/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({
                name: this.name.value(),
                surname: this.surname.value(),
                birthday: this.birthday.value(),
                addresses: this.addresses.values(),
                phoneNumbers: this.phones.values()  
            })
        });
        
        if(response.ok) {
            alert('OK');
            console.log(await response.json());
        }
        else {
            alert(response.status);
        }
    }

    isValid() {
        this.errorsMessages = [];
        if(!this.name.isValid) this.errorsMessages.push(`Name length should be more than ${this.stringLength}`);
        if(!this.surname.isValid) this.errorsMessages.push(`Surname length should be more than ${this.stringLength}`);
        if(!this.birthday.isValid) this.errorsMessages.push('Birth must be before now');
        if(this.addresses.values().length === 0) this.errorsMessages.push('Add at least one address');
        if(this.phones.values().length === 0) this.errorsMessages.push('Add at least one phone number');

        return this.errorsMessages.length === 0;
    }

    printErrors() {
        this.errorsWrapper.hidden = false;
        this.errorsWrapper.innerHTML = '';
        this.errorsMessages.forEach(message => {
            const li = document.createElement('li');
            li.textContent = message;
            this.errorsWrapper.appendChild(li);
        });
    }
}