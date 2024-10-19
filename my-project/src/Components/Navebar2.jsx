import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cart = useSelector((state) => state.cart || []);

  return (
    <nav className="bg-blue-600 p-4 sticky top-0 z-10">
      <h2 className="text-white text-2xl font-bold">YOUR PRODUCTS</h2>
      <ul className="flex justify-end space-x-11 mt-2">
        <li>
          <Link to="/" className="text-white hover:text-blue-200">
        HOME
          </Link>
        </li>
      
      </ul>
    </nav>
  );
};

export default Navbar;
