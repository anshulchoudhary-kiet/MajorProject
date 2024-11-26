// src/pages/Home.js
import React from 'react';

function Home() {
  return (
    <section className="flex flex-col items-center justify-center bg-gray-200 text-center p-10 h-[80vh]">
      <h1 className="text-5xl font-bold text-primary mb-4">Transparency in Food Supply</h1>
      <p className="text-lg text-gray-700 mb-6">Track your food's journey from farm to table.</p>
      <button className="bg-secondary text-white py-3 px-6 rounded hover:bg-blue-500 transition duration-300">
        Learn More
      </button>
    </section>
  );
}

export default Home;

