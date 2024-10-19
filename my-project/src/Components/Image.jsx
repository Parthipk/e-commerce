import React from 'react';

export default function Image() {
   const handleClick=()=>{
    window.scrollBy({
        top:1000,
        behavier:'smooth',
    }

    )
   }

 
    return (
        <div className="relative flex bg-gray-100">
           
           <img 
        src="https://www.advancedtech.com/wp-content/uploads/2022/05/ATS_IndustrialRepair_Hero.jpg" 
        alt="Descriptive Alt Text" 
        className="w-full h-[500px] object-cover" 
      />
      <div className="absolute inset-0 bg-black opacity-60"></div> 
   
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col items-start z-2">
                <h1 className="text-white text-4xl font-bold mb-2">
                    My Store Repair 
                </h1>
                <button 
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-transform duration-300" 
                    onClick={handleClick}
                >
                    Service We Offer
                </button>
            </div>
        </div>
    );
}
