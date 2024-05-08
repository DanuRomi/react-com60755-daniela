import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import {getProducts} from '../../utils/MockData'

const ItemListContainer = ( { greeting, bgBlue } ) => { //(props) => {
    //const { greeting, bgBlue } = props //desestructuracion

    const [products, setProducts] = useState([])
    // const { bgBlue, greeting } = props
    // const bgBlue = props.bgBlue
    // const greeting = props.greeting

    useEffect(() => {
        getProducts()
            .then((res) => {
                setProducts(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const defaultTitle = "Default title"

    return (
        <main>
            <h1> { greeting ? greeting : defaultTitle } </h1>
            <div>
              <ItemList productsList={products}/>
            </div>
        </main>
    )
}

export default ItemListContainer
