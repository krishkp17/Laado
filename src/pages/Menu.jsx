import React from 'react';
import MenuCard from '../component/MenuCard';

const Menu = () => {
 
  const vegWeeklyMenu = [
    {
      id: 1,
      day: "Monday",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80",
      meals: {
        breakfast: "Poha, Sprouts, Tea / Coffee, Banana",
        lunch: "4 Roti, Dal Fry, Jeera Rice, Mix Veg Sabzi, Salad",
        dinner: "3 Roti, Shahi Paneer, Steamed Rice, Boondi Raita"
      }
    },
    {
      id: 2,
      day: "Tuesday",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80",
      meals: {
        breakfast: "Aloo Paratha (2 pcs), Curd, Pickle, Tea",
        lunch: "4 Roti, Chana Dal, Rice, Aloo Jeera, Salad",
        dinner: "3 Roti, Malai Kofta, Jeera Rice, Green Salad"
      }
    },
    {
      id: 3,
      day: "Wednesday",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80",
      meals: {
        breakfast: "Idli Sambar, Coconut Chutney, Tea",
        lunch: "4 Roti, Rajma Masala, Steamed Rice, Papad, Salad",
        dinner: "3 Roti, Veg Handi, Pulao, Gulab Jamun (1 pc)"
      }
    },
    {
      id: 4,
      day: "Thursday",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80",
      meals: {
        breakfast: "Upma, Boiled Chana, Tea / Coffee",
        lunch: "4 Roti, Dal Tadka, Rice, Bhindi Masala, Salad",
        dinner: "3 Roti, Palak Paneer, Jeera Rice, Custard"
      }
    },
    {
      id: 5,
      day: "Friday",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80",
      meals: {
        breakfast: "Chole Bhature (2 pcs), Pickle, Tea",
        lunch: "4 Roti, Kadi Pakora, Steamed Rice, Aloo Dum, Salad",
        dinner: "3 Roti, Matar Mushroom, Rice, Fruit Salad"
      }
    },
    {
      id: 6,
      day: "Saturday",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=500&q=80",
      meals: {
        breakfast: "Methi Paratha, Butter, Curd, Tea",
        lunch: "4 Roti, Moong Dal, Rice, Lauki Kofta, Salad",
        dinner: "3 Roti, Veg Biryani, Raita, Papad"
      }
    },
    {
      id: 7,
      day: "Sunday",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=500&q=80",
      meals: {
        breakfast: "Puri Sabzi (4 pcs), Jalebi, Tea",
        lunch: "Special Thali: Paneer Lababdar, Jeera Rice, Naan, Dal Makhani, Sweet",
        dinner: "3 Roti, Mix Veg Curry, Rice, Ice Cream"
      }
    }
  ];

  const nonVegWeeklyMenu = [
    {
      id: 1,
      day: "Monday",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80",
      meals: {
        breakfast: "Boiled Eggs (2), Bread Toast, Tea",
        lunch: "4 Roti, Chicken Curry (2 pcs), Rice, Salad",
        dinner: "3 Roti, Egg Masala (2 eggs), Jeera Rice, Raita"
      }
    },
    {
      id: 2,
      day: "Tuesday",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80",
      meals: {
        breakfast: "Egg Omelette, Pav/Bread, Tea",
        lunch: "4 Roti, Dal Fry, Rice, Fish Curry (1 pc), Salad",
        dinner: "3 Roti, Chicken Bhuna, Rice, Salad"
      }
    },
    {
      id: 3,
      day: "Wednesday",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80",
      meals: {
        breakfast: "Chicken Sandwich, Tea / Coffee",
        lunch: "4 Roti, Chicken Korma (2 pcs), Rice, Papad",
        dinner: "3 Roti, Egg Curry (2 eggs), Pulao, Sweets"
      }
    },
    {
      id: 4,
      day: "Thursday",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80",
      meals: {
        breakfast: "Boiled Eggs (3), Butter Toast, Tea",
        lunch: "4 Roti, Mutton Curry (2 pcs), Steamed Rice, Salad",
        dinner: "3 Roti, Chicken Fry (2 pcs), Dal, Rice"
      }
    },
    {
      id: 5,
      day: "Friday",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80",
      meals: {
        breakfast: "Egg Bhurji (2 eggs), Roti (2), Tea",
        lunch: "4 Roti, Butter Chicken, Jeera Rice, Salad",
        dinner: "3 Roti, Fish Fry, Dal Tadka, Rice"
      }
    },
    {
      id: 6,
      day: "Saturday",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80",
      meals: {
        breakfast: "Chicken Keema Paratha, Curd, Tea",
        lunch: "4 Roti, Chicken Masala, Steamed Rice, Raita",
        dinner: "3 Roti, Egg Bhurji Curry, Jeera Rice, Salad"
      }
    },
    {
      id: 7,
      day: "Sunday",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=500&q=80",
      meals: {
        breakfast: "Boiled Eggs (2), Omelette, Juice, Toast",
        lunch: "Special Non-Veg Thali: Chicken Biryani, Raita, Shami Kebab, Gulab Jamun",
        dinner: "3 Roti, Mutton Rogan Josh, Pulao, Dessert"
      }
    }
  ];

  return (
    <section id='menu'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
     
      <div className="text-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900">Weekly Mess Menu</h1>
        <p className="text-gray-600 mt-2 text-lg">Delicious, hygienic, and balanced 7-day meal schedule for breakfast, lunch, and dinner.</p>
      </div>

      
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b pb-3 border-gray-200">
          <span className="w-4 h-4 rounded-full bg-green-600 inline-block"></span>
          <h2 className="text-2xl font-bold text-gray-900">Vegetarian Weekly Menu</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vegWeeklyMenu.map((item) => (
            <MenuCard 
              key={item.id}
              day={item.day}
              type="Veg"
              image={item.image}
              meals={item.meals}
            />
          ))}
        </div>
      </div>

      
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b pb-3 border-gray-200">
          <span className="w-4 h-4 rounded-full bg-red-600 inline-block"></span>
          <h2 className="text-2xl font-bold text-gray-900">Non-Vegetarian Weekly Menu</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {nonVegWeeklyMenu.map((item) => (
            <MenuCard 
              key={item.id}
              day={item.day}
              type="Non-Veg"
              image={item.image}
              meals={item.meals}
            />
          ))}
        </div>
      </div>

    </div>
    </section>
  );
};

export default Menu;