import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cart = useSelector((state) => state.cart || []);

  return (
    <nav className="bg-blue-900 p-4 sticky top-0 z-10">
      <h2 className="text-white text-2xl font-bold">My Store</h2>
      <ul className="flex justify-end space-x-11 mt-2">
        <li>
        </li>
        <li>
          <Link to="/cart" className="text-white hover:text-blue-200 flex items-center">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="ml-1">({cart.length || 0})</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
