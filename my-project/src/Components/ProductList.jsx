import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../Store/Actions';
import 'bootstrap/dist/css/bootstrap.min.css';
const ProductList = () => {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h1 className='justify-center text-center text-5xl font-bold'>REFURBISHED PRODUCTS</h1>
      <ul className="flex flex-wrap gap-4 justify-center mt-10">
        {products.map((product) => (
          <li key={product.id} className="w-fit ">
              <div className="card flex flex-col items-center" style={{ width: '18rem' }}>

              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title text-center">{product.name}</h5>
                <p className="card-text text-center">{product.price}</p>
                <button className="btn btn-primary " onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
