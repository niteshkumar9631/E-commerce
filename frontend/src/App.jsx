import React from 'react'
import ReactDOM from 'react-dom';
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Order from './pages/Order';
import Navbar from './components/Navbar'
import Product from "./pages/Product"
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vm] md:px[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/place-Order' element={<PlaceOrder/>} />
        <Route path='/Orders' element={<Order/>} />
        <Route path="/order" element={<Order />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
      <Footer/>

      
    </div>
  )
}

export default App

