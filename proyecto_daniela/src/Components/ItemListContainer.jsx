import { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { getProducts, getFilteredProducts } from '../Utils/MockData'
import { useParams } from 'react-router-dom';
import Loading from './Loading'

const ItemListContainer = ({ mensaje }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();

  useEffect(() =>{

    setLoading(true);
    if (categoryId){
      getFilteredProducts(categoryId).then((res) => {
        setProducts(res);
        setLoading(false);
      });
    }
    else{
    getProducts()
      .then((res) => {
        setProducts(res);
        setLoading(false);
      });
    }

  }, [categoryId]);

  return (
    <div>
      <h2>{mensaje}</h2>
      { loading ?
        <Loading></Loading> :
        <ItemList productsList={products} />
      }

    </div>
  )
}

export default ItemListContainer