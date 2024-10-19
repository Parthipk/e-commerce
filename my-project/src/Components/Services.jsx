import React from 'react';
import { FaMobileAlt, FaWater, FaGamepad, FaServicestack } from 'react-icons/fa'; 

export default function Services() {
    return (
        <>
            <h1 className='justify-center text-center text-5xl font-bold'> SERVICE WE OFFER </h1>
        <div className="flex flex-wrap justify-center p-6 ">
        
            <div className="m-4 p-4 bg-white rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl">
                <FaMobileAlt className="text-4xl text-blue-500 mb-2" />
                <h4 className="text-lg font-bold">Phone Repair</h4>
                <p className="text-sm text-gray-600 text-center">
                    We provide quick and reliable phone repair services to get you back on track.
                </p>
            </div>
            <div className="m-4 p-4 bg-white rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl">
                <FaWater className="text-4xl text-blue-500 mb-2" />
                <h4 className="text-lg font-bold">Water Repair</h4>
                <p className="text-sm text-gray-600 text-center">
                    Our experts can fix water damage issues to restore your device to perfect condition.
                </p>
            </div> <div className="m-4 p-4 bg-white rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl">
                <FaGamepad className="text-4xl text-blue-500 mb-2" />
                <h4 className="text-lg font-bold">Console Repair</h4>
                <p className="text-sm text-gray-600 text-center">
                    We specialize in repairing gaming consoles to ensure you're always in the game.
                </p>
            </div> <div className="m-4 p-4 bg-white rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl">
                <FaServicestack className="text-4xl text-blue-500 mb-2" />
                <h4 className="text-lg font-bold">Service</h4>
                <p className="text-sm text-gray-600 text-center">
                    Offering a variety of repair services to meet all your electronic needs.
                </p>
            </div>
        </div>
        </>
    );
}
