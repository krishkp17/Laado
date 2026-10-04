import React from 'react';
import { toast } from 'react-toastify';

const MenuCard = ({ day, type, meals, image }) => {
  const isVeg = type.toLowerCase() === 'veg';

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col justify-between">
      
      
      <div className="relative h-40 overflow-hidden">
        <img 
          src={image} 
          alt={day} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        
        <div className="absolute bottom-3 left-3 text-white">
          <h3 className="text-xl font-bold">{day}</h3>
        </div>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow flex items-center gap-1.5">
          <span className={`w-2.5 h-2.5 rounded-full ${isVeg ? 'bg-green-600' : 'bg-red-600'}`}></span>
          <span className="text-xs font-bold text-gray-800">{type}</span>
        </div>
      </div>

      
      <div className="p-4 flex-1 space-y-3 text-sm font-mono font-medium">
        
        
        <div className="bg-orange-50/50 p-2.5 rounded-xl border border-orange-100">
          <span className="font-bold text-orange-700 block text-xs uppercase tracking-wider mb-1">☀️ Breakfast</span>
          <p className="text-gray-700">{meals.breakfast}</p>
        </div>

       
        <div className="bg-orange-50/50 p-2.5 rounded-xl border border-orange-100">
          <span className="font-bold text-orange-700 block text-xs uppercase tracking-wider mb-1">🍛 Lunch</span>
          <p className="text-gray-700">{meals.lunch}</p>
        </div>

       
        <div className="bg-orange-50/50 p-2.5 rounded-xl border border-orange-100">
          <span className="font-bold text-orange-700 block text-xs uppercase tracking-wider mb-1">🌙 Dinner</span>
          <p className="text-gray-700">{meals.dinner}</p>
        </div>

      </div>

   
      <div className="p-4 pt-0">
        <button 
          onClick={() => toast.success(`Subscribed to ${day}'s ${type} Mess Plan!`)}
          className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-xl text-sm font-semibold transition shadow-sm"
        >
          Select {day} Plan
        </button>
      </div>

    </div>
  );
};

export default MenuCard;