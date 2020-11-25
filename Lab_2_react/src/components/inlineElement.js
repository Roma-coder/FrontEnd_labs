import React from 'react';

export default function InlineElement({inputType, label, changeHandler}) {
    return (
        <div className="inlineElement">
            <label>{label}</label>
            <input type={inputType}  onChange={event => changeHandler(event.target.value)}/>
        </div>
    )
}