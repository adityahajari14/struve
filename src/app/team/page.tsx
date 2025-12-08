'use client';

import Image from 'next/image';
import team from '../../data/team.json';

export default function TeamPage() {
  return (
    <main className="w-full bg-white pt-24">
      {/* Our Team Section */}
      <section className="w-full py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-center text-[38px] font-serif text-gray-800  leading-normal">
            Our Team
          </h1>
          
          {/* Divider Line */}
          <div className="w-10 h-[3px] bg-gray-800 mx-auto mb-16"></div>
          
          {/* Description */}
          <div className="max-w-4xl mx-auto text-center space-y-8 mb-8">
            <p className="text-[16px] text-gray-800 leading-[1.5em]">
              <span className="font-bold">STRU<span className="text-[#E68126]">VE</span></span> team of experts is stretched all over the world, from KSA, the Middle East and USA, with our head office in Riyad, Kigdom of Saudi Arabia. As an international consultancy firm, we are fully equipped to provide our clients all over the world with bespoke value engineering services.
            </p>
            
            <p className="text-[16px] text-gray-800 leading-[1.5em]">
              <span className="font-bold">STRU<span className="text-[#E68126]">VE</span></span> team has a long and distinguished history. For more than 4 decades, our team is working globally, delivering to our clients all over the world value engineering solutions that balance cost, time, efficiency and constructability.
            </p>
          </div>
        </div>
      </section>

      {/* Key Members Section */}
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-[38px] md:text-[50px] font-serif text-gray-800 mb-8 leading-normal">
            <span className="font-bold">Key Members</span>
          </h2>
          
          {/* Divider Line */}
          <div className="w-24 h-[2px] bg-gray-300 mx-auto mb-16"></div>
          
          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {team.map((member) => (
              <div key={member.id} className="w-full max-w-[387px]">
                {/* Member Image */}
                <div className="relative w-full aspect-[387/409] bg-gray-200 mb-6 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="387px"
                  />
                </div>
                
                <div className='flex flex-row justify-between items-start'>
                    {/* Member Name */}
                    <h3 className="text-[20px] font-bold text-gray-800 mb-3">
                    {member.name}
                    </h3>
                    
                    {/* LinkedIn Icon */}
                    <a 
                        href="#" 
                        aria-label="LinkedIn"
                        className="opacity-100 transition-opacity flex-shrink-0"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="24" height="24" viewBox="0 0 48 48" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                            <path d="M87 394 c-13 -13 -7 -51 9 -65 23 -19 49 1 49 37 0 24 -5 30 -25 32 -14 2 -29 0 -33 -4z"/>
                            <path d="M282 284 c-12 -8 -22 -10 -22 -5 0 6 -16 11 -35 11 l-35 0 0 -110 0 -110 35 0 35 0 0 73 c0 75 9 97 42 97 26 0 38 -32 38 -105 l0 -66 33 3 c32 3 32 3 35 65 4 85 -12 141 -44 153 -36 14 -56 12 -82 -6z"/>
                            <path d="M80 180 l0 -110 35 0 35 0 0 110 0 110 -35 0 -35 0 0 -110z"/>
                            </g>
                        </svg>
                    </a>
                </div>
                
                
                {/* Position */}
                <p className="text-[16px] text-gray-800 mb-4 leading-normal">
                  {member.position}
                </p>
                
                {/* Description */}
                <p className="text-[14px] text-gray-700 leading-[1.4em] text-justify">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
