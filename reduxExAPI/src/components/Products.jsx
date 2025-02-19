import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { asyncgetproducts } from '../store/actions/ProductActions';
import { productdelete } from '../store/reducers/ProductReducer';


const Products = () => {

  const { products } = useSelector((state)=> state.ProductReducer);
  console.log(products)

  const dispatch = useDispatch();
  
  useEffect(()=>{

    // dispatch(getproducts())
    dispatch(asyncgetproducts());

  }, []
)

  const DeleteHandler = (index) => {
      console.log(index)
      dispatch(productdelete(index));
    }

  return (
    <div className='m-auto  container p-10 mt-5 bg-red-100'>
      <h1 className='text-center text-3xl font-bold text-red-900'>
        Product List
      </h1>
      <ul>
      {products && 
        products.map((product) => {
          return <li key = {product.id}>
            <h1>{product.title}{ " " }
              <span onClick={()=>DeleteHandler(product.index)} className='text-red-500 font-black cursor-pointer'>
                X
              </span>
            </h1> 
          </li>
        })}
      </ul>
    </div>
  )
}



export default Products