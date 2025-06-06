import Button from '../ui/Button';
import React, { useEffect, useState } from 'react';

function Hero() {
    const [textIndex, setTextIndex] = useState(0);
    const phrases = ['Payroll', 'HRIS', 'Compliance', 'Taxes', 'Invoices', 'Hiring', 'Onboarding'];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 3000); // Change every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section style={{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 97%, 88% 100%, 50% 97%, 10% 100%, 0% 97%)',
          }} className="w-full bg-[#a9d6fe] pt-10 sm:pt-16 md:pt-12 lg:pt-44 pb-[260px]" > 
            <div className="max-w-[86.5rem] mx-auto px-10 flex flex-col lg:flex-row items-center justify-between gap-5 mt-32">

                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    <div style={{
    transform: 'rotate(0.8deg)', // Adjust rotation to your liking
    display: 'inline-block',
    zIndex: 1,
  }}><span
  key={textIndex}
  
  className="inline-block animate-slideDown relative bg-white py-1 px-1"
  
>
  {phrases[textIndex]}
</span></div>
 <br />
                        for global teams
                    </h1>
                    <p className="text-gray-700 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                        Deel helps tens of thousands of companies expand globally with unmatched speed, flexibility, and compliance. Get our all-in-one Global People Platform that simplifies the way you onboard, offboard, and everything else in between.
                    </p>
                    <div className="flex justify-center gap-3 lg:justify-start">
                        <Button label={'Get a demo'}/>

                        <button className="px-6 py-3 bg-transparent text-black rounded-3xl font-semibold border border-2 border-[#93adc7] hover:border-gray-500 transition">
                            Speak to sales
                        </button>
                    </div>
                </div>

                {/* Right Content - Placeholder Image */}
                <div className="flex-1">
                    <div className="rounded-xl flex items-center justify-center text-gray-500">
                    <img src={`${process.env.PUBLIC_URL}/images/heroSectionImage.png`} alt="hero" />

                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;
