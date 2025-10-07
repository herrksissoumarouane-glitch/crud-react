import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleProduct } from '../redux';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateProduct() {
  const { id } = useParams();
  const products = useSelector((state) => state.product);
  const product = products.find((item) => item.id === Number(id));

  const [title, setUpdateTitle] = useState(product?.title || '');
  const [price, setUpdatePrice] = useState(product?.price || '');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(toggleProduct({ id: Number(id), title, price }));
    navigate('/products');
  };

return (
  <div className="max-w-md mx-auto mt-6 p-6 bg-white shadow rounded">
    <h4 className="text-xl font-semibold mb-4">Update Product</h4>
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        value={title}
        onChange={(e) => setUpdateTitle(e.target.value)}
        required
      />
      <input
        type="number"
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        value={price}
        onChange={(e) => setUpdatePrice(e.target.value)}
        required
      />
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
      >
        Update
      </button>
    </form>
  </div>
);

}

export default UpdateProduct;