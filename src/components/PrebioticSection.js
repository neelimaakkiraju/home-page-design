import React from "react";

export default function PrebioticSection() {
  return (
    <div className="w-full py-16 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Prebiotics nourish the beneficial gut bacteria, supporting digestive
          health
        </h2>
        <div className="text-gray-700">
          Our dog food formula contains carefully selected prebiotics that work
          in harmony with the gut microbiota, providing the necessary nutrients
          for the growth and maintenance of beneficial bacteria, and ultimately
          supporting digestive health.
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/images/food-bowl.png"
          alt="Dog food bowl"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
