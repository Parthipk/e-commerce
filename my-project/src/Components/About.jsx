import React, { useState, useEffect } from 'react';

export default function About() {
    const [trustedUsers, setTrustedUsers] = useState(0);
    const [phoneRepaired, setPhoneRepaired] = useState(0);
    const [count, setCount] = useState(0);
    const animateCounter = (target, setCount) => {
        let count = 0;
        const increment = Math.ceil(target / 100); 
        const interval = setInterval(() => {
            if (count < target) {
                count += increment;
                setCount(Math.min(count, target));
            } else {
                clearInterval(interval); 
            }
        }, 20);
    };

    useEffect(() => {
        animateCounter(100, setTrustedUsers); 
        animateCounter(10000, setPhoneRepaired); 
        animateCounter(10, setCount); 
    }, []);

    return (
        <div className="flex flex-col md:flex-row p-6">
            <div className="md:w-1/2 flex flex-col justify-center p-4">
                <h1 className="text-3xl font-bold mb-2">About Us</h1>
                <h2 className="text-xl text-gray-700 mb-4">What We Offer</h2>
                <p className="text-gray-600">
                    This is where you can include a brief description about your company, its mission, values, and what makes it unique. 
                    Feel free to add any additional information that you think is relevant.
                </p>
                <div className="flex justify-left items-center bg-transparent p-6">
                <div className="bg-transparent p-6 flex flex-col">
                    <div className="flex flex-col md:flex-row md:space-x-6">
                    <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-yellow-500">
                            <h4 className="text-5xl font-bold">{trustedUsers}+</h4>
                            <p className="text-xl">Trusted Users</p>
                        </div>
                        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-yellow-500">
                            <h4 className="text-5xl font-bold">{phoneRepaired}+</h4>
                            <p className="text-xl">Phones Repaired</p>
                        </div>
                        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-yellow-500">
                            <h4 className="text-5xl font-bold">{count}+</h4>
                            <p className="text-xl">countries in touch</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="md:w-1/2 flex justify-center items-center p-4">
                <img 
                    src="https://phonerepairmore.com/wp-content/uploads/2024/02/Is_it_cheaper_to_repair_or_replace_an_iPhone_3c286269cc3345d58d6b45e17bd01de9.png.webp" 
                    alt="Descriptive Alt Text" 
                    className="w-full h-[500px] object-cover rounded-lg shadow-lg" 
                />
            </div>
       

        </div>
    );
}
