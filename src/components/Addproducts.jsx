import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux'; 
import { useNavigate } from 'react-router-dom';

function AddProduct() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProduct = {
      id: Date.now(),
      title,
      price
    };

    dispatch(addProduct(newProduct));
    setTitle('');
    setPrice('');
    navigate('/products');
  };

  return (
  <div className="max-w-md mx-auto mt-6 p-6 bg-white shadow rounded">
    <h4 className="text-xl font-semibold mb-4">Add Product</h4>
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
      >
        Save
      </button>
    </form>
  </div>
);
}

export default AddProduct;