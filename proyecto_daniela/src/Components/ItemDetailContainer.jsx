import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProductoById } from '../Utils/MockData';
import ItemDetail from './ItemDetail';
import Loading from './Loading'

const ItemDetailContainer = () => {

  const [product, setProduct] = useState([]);
  const { productId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProductoById(productId).then((res) => {
      setProduct(res);
      setLoading(false);
    });
  }, [productId]);

  return (
    <>
      { loading ? 
        <Loading /> :
        <div className='itemDetail'>
          <ItemDetail {...product} />
        </div>
      }
    </>
  )
}

export default ItemDetailContainer