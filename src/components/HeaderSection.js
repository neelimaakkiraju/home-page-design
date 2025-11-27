import React from "react";

export default function HeaderSection() {
  const features = [
    {
      icon: "/icons/real-food.png",
      title: "Real Food",
      text: "Wholesome recipes for dogs with real meat and veggies.",
      bg: "bg-green-100"
    },
    {
      icon: "/icons/premium.png",
      title: "Premium Ingredient",
      text: "Elevating pet care with unmatched safety and quality.",
      bg: "bg-yellow-100"
    },
    {
      icon: "/icons/made-fresh.png",
      title: "Made Fresh",
      text: "We prioritize maintaining the integrity of whole foods and nutrition.",
      bg: "bg-teal-100"
    },
    {
      icon: "/icons/vet.png",
      title: "Vet Developed",
      text: "We raise the bar for dog nutrition, surpassing industry expectations.",
      bg: "bg-red-100"
    }
  ];

  return (
    <div className="w-full bg-white py-16 px-6">

      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-extrabold leading-tight">
        What makes us different <br /> makes them stronger
      </h2>

      {/* FEATURES + IMAGE */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Left Feature List */}
        <div className="flex flex-col justify-center gap-10">
          {features.slice(0, 2).map((f) => (
            <div key={f.title} className="flex gap-4 items-start">
              <div className={`${f.bg} p-4 rounded-full`}>
                <img src={f.icon} alt={f.title} className="w-10 h-10" />
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

        {/* Right Feature List */}
        <div className="flex flex-col justify-center gap-10">
          {features.slice(2).map((f) => (
            <div key={f.title} className="flex gap-4 items-start">
              <div className={`${f.bg} p-4 rounded-full`}>
                <img src={f.icon} alt={f.title} className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{f.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* CTA SECTION */}
      <div className="text-center mt-14">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-3 rounded-full text-lg font-medium transition">
          Get your dog's healthy meal today!
        </button>

        {/* Payment Icons */}
        <div className="flex items-center justify-center gap-4 mt-4 text-gray-600 text-sm">
          <span>🔒 30-day money back guarantee</span>

          <img src="/images/paypal.png" className="h-6" alt="PayPal" />
          <img src="/images/visa.png" className="h-6" alt="Visa" />
          <img src="/images/master-card.png" className="h-6" alt="Mastercard" />
          <img src="/images/apple-pay.png" className="h-6" alt="Apple Pay" />
          <img src="/images/google-pay.png" className="h-6" alt="Google Pay" />
        </div>
      </div>

    </div>
  );
}
