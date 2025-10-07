import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProduct } from '../redux';
 
function Products() {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();

  return (
    <div className="p-6 max-w-5xl mx-auto"> 
      <div className="mb-4">
        <Link
          to="/addproduct"
          className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          + Add Product
        </Link>
      </div>
 
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4 text-left">ID</th>
              <th className="py-2 px-4 text-left">TITLE</th>
              <th className="py-2 px-4 text-left">PRICE</th>
              <th className="py-2 px-4 text-left">ACTION</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products &&
              products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4">{product.id}</td>
                  <td className="py-2 px-4">{product.title}</td>
                  <td className="py-2 px-4">{product.price} $</td>
                  <td className="py-2 px-4 space-x-2">
                    <Link
                      to={`/updateproduct/${product.id}`}
                      className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition"
                    >
                      Modifier
                    </Link>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                      onClick={() => dispatch(deleteProduct(product.id))}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;
