import PhoneNumberElelement from './modules/phoneNumberList';
import AddressElement from './modules/addressList';
import InlineElement from './modules/inlineElement';
import RegistrationForm from './modules/registrationForm';

const  form = new RegistrationForm('Form', 'formWrapper');



const node = document.querySelector('#main');
form.render(node);



