import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi'; 

const Navbar = () => {
 
  const [isOpen, setIsOpen] = useState(false);

  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Price', path: '/price' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
         
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-orange-600 tracking-wider">
              Mess<span className="text-gray-800">Delight</span>
            </Link>
          </div>

          
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            
            
            <Link
              to="/menu"
              className="bg-orange-600 text-white px-4 py-2 rounded-full font-medium hover:bg-orange-700 transition shadow-sm"
            >
              Order Now
            </Link>
          </div>

          
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-600 focus:outline-none text-2xl"
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>

        </div>
      </div>

     
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-2 shadow-lg">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setIsOpen(false)} 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              to="/menu"
              onClick={() => setIsOpen(false)}
              className="block text-center w-full bg-orange-600 text-white px-4 py-2 rounded-full font-medium hover:bg-orange-700 transition shadow-sm"
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;