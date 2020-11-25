import React, { useState } from 'react';
import AddressList from './addressList';
import PhoneList from './phoneList';
import InlineElement from './inlineElement';

export default function RegisterForm({wrapperClassName}) {
    
    const [errors, setErrors] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [date, setDate] = useState('');
    const [phones, setPhones] = useState([]);
    const [addresses, setAddresses] = useState([]);


    const validate  = () => {    
        const listErrors = [];
        const minStrLength = 5;
        if(firstName.length < minStrLength) listErrors.push(`Name length should be more than ${minStrLength}`);
        if(lastName.length < minStrLength) listErrors.push(`Surname length should be more than ${minStrLength}`);
        if(date === '' || Date.parse(date) > Date.now()) listErrors.push('Birth must be before now');
        if(addresses.length < 1) listErrors.push('Add at least one address');
        if(phones.length < 1) listErrors.push('Add at least one phone number');
        
        setErrors(() => listErrors);
        return listErrors.length === 0;
    }

    

    const firstNameChange = value => setFirstName(() => value);
    const lastNameChange = value => setLastName(() => value);
    const dateChange = value => setDate(() => value);
    const phonesChange = items => setPhones(() => items);
    const addressesChange = items => setAddresses(() => items);


    const submitHandler = () => {
        if(validate()) send();
    }

    const send = async () => {    
       alert('sent to server');
        const response = await fetch('https://god.com/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({
                name: firstName,
                surname: lastName,
                birthday: date,
                addresses: addresses.map(address => address.value),
                phoneNumbers:  phones.map(phone => phone.value)  
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



    const renderErrors = () => errors.map((error, index) => (<li key={index}>{error}</li>));

    return (
        <div className={wrapperClassName}>
            <label>Form</label>
            <InlineElement inputType="text" label="First Name" changeHandler={firstNameChange}/>
            <InlineElement inputType="text" label="Last Name" changeHandler={lastNameChange}/>
            <InlineElement inputType="date" label="Date of birth" changeHandler={dateChange}/>
            <AddressList changeHandler={addressesChange} />
            <PhoneList changeHandler={phonesChange} />
            <button onClick={submitHandler}>Submit</button>
            <ul>
                {renderErrors()}
            </ul>

        </div>
    )

  
}