import React from 'react'
import { useState } from 'react'

const ItemCount = () => {
    
    const [cantItems, setCantItems] = useState(0)

    let stock = 5
    const handleAdd = () => {
        setCantItems(cantItems + 1)
    }
    const handleSubstract = () => {
        //if (cantItems > 0) setCantItems(cantItems - 1)
        cantItems > 0 && setCantItems(cantItems - 1)
    }

    return (
        <>
            <div>ItemCount</div>
            <button onClick={ () => handleAdd() }> + </button>
            <span> { cantItems } </span>
            <button onClick={ () => handleSubstract()}> - </button>
        </>
    )
}

export default ItemCount