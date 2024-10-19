import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Navbar2 from './Components/Navebar2';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import Image from './Components/Image';
import About from './Components/About';
import Services from './Components/Services';
import Privacy from './Components/Privacy';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import StickyIcons from './Components/StickyIcons';
import News from './Components/News';

const App = () => {
  return (
    <Router>
      <StickyIcons />


      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Image />
              <About />
              <Services />
              <Privacy />
              <ProductList />
       
              <Contact />
              <Footer />
            </>
          }
        /><Route
          path="/cart"
          element={
            <>
            <Navbar2/>
              <Cart />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
