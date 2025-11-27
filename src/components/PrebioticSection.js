import React from "react";

export default function PrebioticSection() {
  return (
    <div className="w-full py-16 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">
          Prebiotics nourish the beneficial gut bacteria,
          supporting digestive health
        </h2>

        <p className="text-gray-600">
          Our dog food contains carefully selected prebiotics designed to support gut bacteria
          and overall digestive wellness.
        </p>
      </div>

      <img
        src="/images/food-bowl.png"
        alt="dog food"
        className="w-full md:w-1/2 rounded-lg shadow"
      />
    </div>
  );
}
