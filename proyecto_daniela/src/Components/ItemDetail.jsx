import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ id, name, description, price, image }) => {

  return (
    <div className="card" style={{width: "18rem"}}>
        <img src={ image } className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{ name }</h5>
            <p className="card-text">{ description }</p>
            <p className="card-text">${ price }</p>
            <ItemCount />
        </div>
    </div>
  )
}

export default ItemDetail