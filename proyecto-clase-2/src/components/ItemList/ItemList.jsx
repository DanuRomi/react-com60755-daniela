import Item from '../Item/Item'
import styles from './ItemList.module.css'

const ItemList = ({productsList}) => {
  return (
    <div className={styles.itemlist}>
        {productsList.map((elem)=>{
            return <Item  key={elem.id} {...elem}/>
        })}
    </div>
  )
}

export default ItemList