import React from 'react';

import { HiArrowRight, HiStar } from 'react-icons/hi';
import hero from '../assets/hero.png'

const Hero = () => {
  return (
    
    <section id='home'>
        <div className="bg-gradient-to-b from-orange-50/50 to-white min-h-[calc(100vh-4rem)] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          
          <div className="space-y-6 text-center lg:text-left">
            
            
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-orange-600 animate-pulse"></span>
              100% Fresh & Homemade Mess Food
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Delicious Food <br />
              <span className="text-orange-600">Delivered to You</span>
            </h1>

            
            <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Fresh ingredients, authentic flavors, and your favorite meals delivered right at your doorstep. Because great food makes life better.
            </p>

            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <a href="#menu" className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-orange-700 transition shadow-lg shadow-orange-600/20">
                    Order Now <HiArrowRight className="text-lg" />
              </a>
                
              
              <a href="#price" className="inline-flex items-center justify-center bg-white text-gray-800 border border-gray-300 px-8 py-3.5 rounded-full font-semibold hover:bg-gray-50 transition shadow-sm">
                View Plan
              </a>
            </div>

            

          </div>

          
          <div className="relative flex justify-center">
            

            
            <div className="relative bg-white p-4 rounded-3xl shadow-2xl border border-gray-100 max-w-lg h-100 w-full">
              <img
                src={hero}
                alt="Delicious Mess Food"
                className="rounded-2xl w-full h-64 sm:h-90 object-cover shadow-md"
              />
              
    
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3">
                <div className="bg-orange-600 text-white p-2 rounded-xl text-xl">
                  🍲
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Special Thali</p>
                  <p className="text-sm font-bold text-gray-900">Daily Fresh Meals</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
    </section>


  );
};

export default Hero;