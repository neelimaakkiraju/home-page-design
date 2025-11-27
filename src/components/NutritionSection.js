import React from "react";

export default function NutritionSection() {
  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Nutrition is the foundation for longer, healthier lives in dogs.
          </h2>
          <div className="text-gray-700 mb-4">
            Invest in your dog's future with our scientifically formulated
            superfood-powered supplements. Give them the nutrition they deserve
            and watch them thrive with vitality, energy, and joy for a longer,
            healthier life.
          </div>
          <div className="mt-6 space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-orange-500 text-xl">97%</span>
              <span className="text-gray-700 text-sm">
                Dog owners said our dog food was leading in nutrition for their
                fur babies and makes a difference.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-orange-500 text-xl">84%</span>
              <span className="text-gray-700 text-sm">
                Dog food provides a visibly nutritious and a potential probiotic
                for supporting digestion.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-orange-500 text-xl">92%</span>
              <span className="text-gray-700 text-sm">
                Our dog food helps protect and digest, by comparison to most
                retail brands.
              </span>
            </div>
          </div>
          <button className="mt-8 bg-orange-400 hover:bg-orange-500 transition text-white px-6 py-3 rounded-md font-semibold shadow">
            Give your furry friend the gift of wholesome nutrition
          </button>
        </div>
        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/dogs-eating.png"
            alt="Happy dog with food"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
