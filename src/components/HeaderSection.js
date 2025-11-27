import React from "react";

export default function HeaderSection() {
  return (
    <div className="w-full bg-white py-12 px-6">
      <h2 className="text-center text-3xl font-bold">
        What makes us different <br /> makes them stronger
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10">
        
        {/* Left */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg">Real Food</h3>
            <p className="text-gray-600">Wholesome recipes for dogs with real meat and veggies.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Premium Ingredient</h3>
            <p className="text-gray-600">Every bite crafted with unmatched safety and quality.</p>
          </div>
        </div>

        {/* Center Image */}
        <img
          src="/images/dry-food.png"
          alt="dog food"
          className="w-64 rounded-full shadow-md"
        />

        {/* Right */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg">Made Fresh</h3>
            <p className="text-gray-600">We prioritize maintaining whole foods and nutrition.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Vet Developed</h3>
            <p className="text-gray-600">Designed by top veterinary experts.</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <button className="bg-orange-400 text-white px-6 py-3 rounded-md">
          Get your dog’s healthy meal today!
        </button>
      </div>
    </div>
  );
}
