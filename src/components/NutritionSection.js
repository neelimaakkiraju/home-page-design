import React from "react";

export default function NutritionSection() {
  return (
    <div className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Left Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Nutrition is the foundation for longer, healthier lives in dogs.
          </h2>

          <p className="text-gray-600">
            Insert in your dog’s future with our scientifically formulated superfood.
          </p>

          <div className="mt-6 space-y-3">
            <p><span className="font-bold text-orange-500">97%</span> Dogs choose our food over others.</p>
            <p><span className="font-bold text-orange-500">84%</span> Dogs show superior nutrition.</p>
            <p><span className="font-bold text-orange-500">92%</span> Improved gut health & digestion.</p>
          </div>

          <button className="mt-8 bg-orange-400 text-white px-6 py-3 rounded-md">
            Give your furry friend the gift of wholesome nutrition
          </button>
        </div>

        {/* Right Image */}
        <img
          src="/images/dogs-eating.png"
          alt="dog"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
