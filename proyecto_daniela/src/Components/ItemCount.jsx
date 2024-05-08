import React, { useEffect, useState } from 'react'

const ItemCount = () => {
    const [cantidad, setCantidad] = useState(0);

    const addCantidad = () => {
        setCantidad(cantidad + 1);
    };

    const removeCantidad = () => {
        if (cantidad > 0){
            setCantidad(cantidad - 1);
        }
    };

    return (
        <div>
            <button className='btn btn-dark' onClick={ removeCantidad }>-</button>
            <span className='p-2'>{ cantidad }</span>
            <button className='btn btn-dark' onClick={ addCantidad }>+</button>
        </div>
    )
}

export default ItemCount