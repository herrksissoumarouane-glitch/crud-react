import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 
  import { BrowserRouter } from 'react-router-dom';
 import { Provider } from 'react-redux';
  import { store } from './redux';  

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
//4-wrapp all
root.render(
   <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>   
  
);






 


