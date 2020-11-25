import React, { useState } from 'react';

export default function ItemAdder({handleAdd, handleValidate}) {
    const [value, setValue] = useState('');
    return (
        <div className="itemAdder">
            <input type="text" onInput={ event => setValue(event.target.value)}></input>
            <button disabled={!handleValidate(value)} onClick={() => handleAdd(value)}>Add</button>
        </div>
    )
}