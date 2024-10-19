// src/components/AdminProductForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_PRODUCT } from '../Store/Actions';  // Update with your actions file

const AdminProductForm = () => {
  const [product, setProduct] = useState({ name: '', price: '', image: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_PRODUCT, payload: product });
    setProduct({ name: '', price: '', image: '' }); // Reset form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder="Product Name"
        required
      />
      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="Product Price"
        required
      />
      <input
        type="text"
        name="image"
        value={product.image}
        onChange={handleChange}
        placeholder="Product Image URL"
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AdminProductForm;
