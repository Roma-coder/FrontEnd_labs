import React from 'react'
import ItemsList from './itemsList'

export default function PhoneList({changeHandler}) {

    const validateHandler = value => {
        const validatingRule = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
        return validatingRule.test(value);
    }
    
    return <ItemsList
        wrapperClassName="phoneList"
        itemClassName ='phoneItem'
        validateHandler = {validateHandler}
        changeHandler = {changeHandler}
        title = "Phone numbers"
    />
}