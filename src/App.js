 import Products from './components/Products';
import { Routes, Route } from 'react-router-dom';
import AddProduct from './components/Addproducts';
import UpdateProduct from './components/UpdateProducts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/products' element={<Products />} />
        <Route path='/addproduct' element={<AddProduct />} /> 
        <Route path='/updateproduct/:id' element={<UpdateProduct />} /> 
      </Routes>
    </div>
  );
}

export default App;
