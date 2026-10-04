import React, { useState } from 'react';
import { HiCheck } from 'react-icons/hi';

const Price = () => {
  const [mealType, setMealType] = useState('veg');

  const vegPlans = [
    {
      name: "BASIC PLAN (VEG)",
      price: "₹1,199",
      period: "/month",
      popular: false,
      features: [
        "Lunch Only (30 Days)",
        "Standard Veg Thali",
        "4 Roti, Dal, Rice & Sabzi",
        "Hygienic Packaging"
      ]
    },
    {
      name: "PREMIUM PLAN (VEG)",
      price: "₹1,799",
      period: "/month",
      popular: true,
      features: [
        "Lunch & Dinner (30 Days)",
        "Pure Veg Menu Options",
        "Special Weekend Veg Thali",
        "Free Home Delivery",
        "Custom Nutrition Plan",
        "Priority Support"
      ]
    },
    {
      name: "ULTIMATE PLAN (VEG)",
      price: "₹2,299",
      period: "/month",
      popular: false,
      features: [
        "Breakfast, Lunch & Dinner",
        "All Days Included (30 Days)",
        "Premium Veg Thali Access",
        "Custom Diet Adjustments",
        "Free Home Delivery",
        "24/7 Mess Support"
      ]
    }
  ];

  const nonVegPlans = [
    {
      name: "BASIC PLAN (NON-VEG)",
      price: "₹1,599",
      period: "/month",
      popular: false,
      features: [
        "Lunch Only (30 Days)",
        "Standard Non-Veg Thali (Egg/Chicken)",
        "4 Roti, Dal, Rice & Chicken (2 pcs)",
        "Hygienic Packaging"
      ]
    },
    {
      name: "PREMIUM PLAN (NON-VEG)",
      price: "₹2,099",
      period: "/month",
      popular: true,
      features: [
        "Lunch & Dinner (30 Days)",
        "Chicken & Egg Options Included",
        "Special Weekend Special Thali",
        "Free Home Delivery",
        "Custom Protein Diet Plan",
        "Priority Support"
      ]
    },
    {
      name: "ULTIMATE PLAN (NON-VEG)",
      price: "₹2,599",
      period: "/month",
      popular: false,
      features: [
        "Breakfast, Lunch & Dinner",
        "All Days Included (30 Days)",
        "Mutton, Chicken & Egg Access",
        "Custom Diet Adjustments",
        "Free Home Delivery",
        "24/7 Mess Support"
      ]
    }
  ];

  const currentPlans = mealType === 'veg' ? vegPlans : nonVegPlans;

  return (
    

    <section id='price'>
        <div className="bg-gradient-to-b from-orange-50/50 to-white min-h-[calc(100vh-4rem)] py-16 px-4 sm:px-6 lg:px-8 text-gray-900 flex flex-col justify-center transition-colors duration-300">

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">

        <span className="bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-semibold inline-block border border-orange-200">
          Our Pricing Plans
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
          Affordable Monthly{" "}
          <span className="text-orange-600">Mess Packages</span>
        </h1>

        <p className="text-gray-600 text-base sm:text-lg">
          Select between vegetarian and non-vegetarian packages to fit your
          daily eating habits.
        </p>

        {/* Veg / Non-Veg Toggle Buttons */}
        <div className="flex justify-center pt-4">
          <div className="bg-orange-50 p-1.5 rounded-2xl border border-orange-100 inline-flex gap-2 shadow-inner">

            <button
              onClick={() => setMealType('veg')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                mealType === 'veg'
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/20'
                  : 'text-gray-600 hover:text-orange-600'
              }`}
            >
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  mealType === 'veg'
                    ? 'bg-white'
                    : 'bg-green-500'
                }`}
              ></span>
              Veg Plans
            </button>

            <button
              onClick={() => setMealType('nonveg')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                mealType === 'nonveg'
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/20'
                  : 'text-gray-600 hover:text-orange-600'
              }`}
            >
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  mealType === 'nonveg'
                    ? 'bg-white'
                    : 'bg-red-500'
                }`}
              ></span>
              Non-Veg Plans
            </button>

          </div>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center w-full">

        {currentPlans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-3xl p-8 bg-white border transition-all duration-300 flex flex-col justify-between ${
              plan.popular
                ? 'border-orange-500 ring-2 ring-orange-500/20 shadow-2xl scale-105 md:-translate-y-2'
                : 'border-gray-100 shadow-lg hover:shadow-xl hover:border-orange-200'
            }`}
          >

            <div>

              {/* Card Title & Badge */}
              <div className="flex justify-between items-center mb-6">

                <h3 className="text-lg font-bold tracking-wider text-gray-800">
                  {plan.name}
                </h3>

                {plan.popular && (
                  <span className="bg-orange-600 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-sm">
                    Popular
                  </span>
                )}

              </div>

              {/* Price */}
              <div className="flex items-baseline mb-8">

                <span className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                  {plan.price}
                </span>

                <span className="text-gray-500 text-sm ml-1">
                  {plan.period}
                </span>

              </div>

              {/* Features */}
              <div className="space-y-4 border-t border-gray-100 pt-6 mb-8">

                {plan.features.map((feature, fIndex) => (
                  <div
                    key={fIndex}
                    className="flex items-center gap-3 text-gray-700 text-sm"
                  >

                    <span className="text-orange-600 text-lg flex-shrink-0 font-bold">
                      <HiCheck />
                    </span>

                    <span>{feature}</span>

                  </div>
                ))}

              </div>

            </div>

            {/* CTA Button */}
            <button
              onClick={() => alert(`Subscribed to ${plan.name} successfully!`)}
              className={`w-full py-3.5 rounded-xl font-semibold transition shadow-md ${
                plan.popular
                  ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-orange-600/30'
                  : 'bg-gray-900 text-white hover:bg-orange-600'
              }`}
            >
              Choose Plan
            </button>

          </div>
        ))}

      </div>

    </div>
    </section>


  );
};

export default Price;
