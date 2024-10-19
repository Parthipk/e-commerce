import React from 'react';

export default function Privacy() {
  return (
    <div className="flex justify-center items-center mt-40 mb-40 relative">
      <img 
        src="https://engineering.fb.com/wp-content/uploads/2024/08/PAI-EngFair-Blog-Header-Final.png" 
        alt="Placeholder" 
        className="rounded shadow-lg h-[300px] w-full object-cover" 
      />
      <div className="absolute inset-0 bg-black opacity-70 rounded"></div> 
      <h1 className='absolute text-white text-3xl font-bold left-4'>We prioritize your privacy and ensure your data is secure during repairs.</h1>
    </div>
  );
}
