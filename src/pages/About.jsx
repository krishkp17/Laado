import React from 'react';
import { HiCheckCircle, HiHeart, HiShieldCheck, HiSparkles } from 'react-icons/hi';

const About = () => {
  
  const features = [
    {
      icon: <HiSparkles className="text-orange-600 text-2xl" />,
      title: "100% Fresh Ingredients",
      description: "We source our vegetables, grains, and spices fresh every single day from trusted local markets."
    },
    {
      icon: <HiShieldCheck className="text-orange-600 text-2xl" />,
      title: "Hygienic Kitchen",
      description: "Our kitchen follows strict safety and cleanliness standards with regular sanitization and quality checks."
    },
    {
      icon: <HiHeart className="text-orange-600 text-2xl" />,
      title: "Homestyle Cooking",
      description: "No artificial colors or excessive oil—just pure, nutritious, mother-like taste that feels like home."
    }
  ];

  return (
    

    <section id='about'>
        <div className="bg-white min-h-[calc(100vh-4rem)] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-semibold inline-block">
            Our Story & Mission
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Crafting Delicious & <span className="text-orange-600">Healthy Moments</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Welcome to our mess service! We started with a simple vision: to provide wholesome, tasty, and affordable daily meals for students and working professionals away from home.
          </p>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
         
          <div className="relative grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80" 
              alt="Mess Kitchen Cooking" 
              className="rounded-2xl shadow-lg w-full h-48 sm:h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=600&q=80" 
              alt="Delicious Food Thali" 
              className="rounded-2xl shadow-lg w-full h-48 sm:h-64 object-cover mt-6"
            />
            
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-600 text-white p-6 rounded-3xl shadow-xl text-center hidden sm:block">
              <span className="block text-3xl font-black">5+</span>
              <span className="text-xs uppercase tracking-wider font-semibold">Years of Trust</span>
            </div>
          </div>

          
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Why People Choose Our Daily Mess Food Over Anything Else
            </h2>
            <p className="text-gray-600">
              Living away from home shouldn't mean compromising on your health or food quality. Every meal we prepare balances traditional flavor with proper nutrition.
            </p>

            
            <div className="space-y-4 pt-2">
              {features.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-orange-50/50 border border-orange-100">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

        
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-3xl p-8 sm:p-12 text-white shadow-xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold">5,000+</p>
            <p className="text-orange-100 text-sm mt-1">Happy Eaters</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold">14+</p>
            <p className="text-orange-100 text-sm mt-1">Daily Menu Items</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold">100%</p>
            <p className="text-orange-100 text-sm mt-1">Hygienic Prep</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold">4.9 ⭐</p>
            <p className="text-orange-100 text-sm mt-1">Customer Rating</p>
          </div>
        </div>

      </div>
    </div>
    </section>

  );
};

export default About;