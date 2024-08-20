
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemDetail from './pages/ItemDetail';
import { useState } from 'react';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';


function App() {

  const [cartItems, setCartitems] = useState([]);

  return (
    <div className="App">

      <Router>
        <div>
          <ToastContainer theme='dark' position='top-center'/>
          <Header cartItems={cartItems} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Home/>} />
            <Route path="/product/:id" element={<ItemDetail cartItems={cartItems} setCartitems={setCartitems} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} setCartitems={setCartitems} />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>);


}

export default App;
