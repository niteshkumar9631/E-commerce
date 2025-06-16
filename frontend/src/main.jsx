import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ShopContextProvider } from './context/ShopContext.jsx'; 

// Create the root and render the app
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <BrowserRouter>
    <ShopContextProvider >
      <App />
    </ShopContextProvider>
  </BrowserRouter>
);
