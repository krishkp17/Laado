import React from 'react';
import './App.css'
import Navbar from './component/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Menu from './pages/Menu';
import Price from './pages/Price';
import Contact from './pages/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="font-sans">
      <Navbar />

      
      <main>
        <Hero />
        <About />
        <Menu />
        <Price />
        <Contact />
      </main>

      <ToastContainer position="top-center" autoClose={3000} theme="colored" />

      
      <footer className="bg-gray-900 text-white py-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Mess Delight. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;