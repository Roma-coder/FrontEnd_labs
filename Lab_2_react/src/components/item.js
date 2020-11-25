import React from 'react';

export default function Item({value, id, handleDelete, className}) {
    return (
        <li key={id} className={className}>
            <label>{value}</label>
            <button onClick={() => handleDelete(id)}>X</button>
        </li>
    )
}