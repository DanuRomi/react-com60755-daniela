const ItemListContainer = ( { greeting, bgBlue } ) => { //(props) => {
    const defaultTitle = "Default title"
    //const { greeting, bgBlue } = props //desestructuracion

    return (
        <>
            <h1>{ greeting ? greeting : defaultTitle }</h1>
            <div>
                <p></p>
                <p></p>
            </div>
        </>
    )
}

export default ItemListContainer
