import React from "react";

export default function GastroSection() {
  return (
    <div className="w-full py-16 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-10">

        <img
          src="/images/dog-lick.png"
          alt="dogs eating"
          className="w-full md:w-1/2 rounded-lg shadow"
        />

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Improve overall gastrointestinal health for better nutrient absorption
          </h2>

          <p className="text-gray-600">
            Through research & scientific studies, we created a breakthrough formula …
          </p>
        </div>
      </div>
    </div>
  );
}
