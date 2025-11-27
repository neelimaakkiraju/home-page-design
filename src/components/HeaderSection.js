import React from "react";
import { LuSalad, LuSparkles, LuTruck, LuPawPrint } from "react-icons/lu";

export default function HeaderSection() {
  const features = [
    {
      icon: <LuSalad size={32} />,
      title: "Real Food",
      text: "Wholesome recipes for dogs with real meat and veggies.",
      bg: "bg-green-100",
    },
    {
      icon: <LuSparkles size={32} />,
      title: "Premium Ingredient",
      text: "Elevating pet care with unmatched safety and quality.",
      bg: "bg-yellow-100",
    },
    {
      icon: <LuTruck size={32} />,
      title: "Made Fresh",
      text: "We prioritize maintaining the integrity of whole foods and nutrition.",
      bg: "bg-teal-100",
    },
    {
      icon: <LuPawPrint size={32} />,
      title: "Vet Developed",
      text: "We raise the bar for dog nutrition, surpassing industry expectations.",
      bg: "bg-red-100",
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-6">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-extrabold leading-tight">
        What makes us different <br /> makes them stronger
      </h2>

      {/* FEATURES + IMAGE */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Features */}
        <div className="flex flex-col justify-center gap-10">
          {features.slice(0, 2).map((f) => (
            <div key={f.title} className="flex gap-4 items-start">
              <div className={`${f.bg} p-4 rounded-full text-gray-800`}>
                {f.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{f.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <img
            src="/images/dry-food.png"
            alt="Dog Food"
            className="w-72 md:w-96 rounded-full"
          />
        </div>

        {/* Right Features */}
        <div className="flex flex-col justify-center gap-10">
          {features.slice(2).map((f) => (
            <div key={f.title} className="flex gap-4 items-start">
              <div className={`${f.bg} p-4 rounded-full text-gray-800`}>
                {f.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA BUTTON */}
      <div className="text-center mt-14">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-3 rounded-full text-lg font-medium transition">
          Get your dog's healthy meal today!
        </button>

        {/* PAYMENT ICONS */}
        <div className="flex items-center justify-center gap-3 mt-4 text-gray-700 text-sm">
          <span>🔒 30-day money back guarantee</span>

          <img
            src="/images/paypal.png"
            alt="PayPal"
            className="h-4 w-auto hover:scale-105 transition-transform duration-200"
          />
          <img
            src="/images/visa.png"
            alt="Visa"
            className="h-4 w-auto hover:scale-105 transition-transform duration-200"
          />
          <img
            src="/images/master-card.png"
            alt="MasterCard"
            className="h-4 w-auto hover:scale-105 transition-transform duration-200"
          />
          <img
            src="/images/apple-pay.png"
            alt="Apple Pay"
            className="h-4 w-auto hover:scale-105 transition-transform duration-200"
          />
          <img
            src="/images/google-pay.png"
            alt="Google Pay"
            className="h-4 w-auto hover:scale-105 transition-transform duration-200"
          />
        </div>
      </div>
    </div>
  );
}
