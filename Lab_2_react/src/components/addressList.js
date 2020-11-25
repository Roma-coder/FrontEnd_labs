import React from 'react'
import ItemsList from './itemsList'

export default function AddressList({changeHandler}) {

    const validateHandler = value => value.length > 10;

    return <ItemsList
        wrapperClassName="addressList"
        itemClassName ='addressItem'
        validateHandler = {validateHandler}
        changeHandler = {changeHandler}
        title = "Addresses"
    />
}