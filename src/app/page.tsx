import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full pt-16 md:pt-20 lg:pt-24">
      {/* First Section */}
      <section className="w-full bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
          {/* Left Column - Image */}
          <div className="flex items-center justify-center overflow-hidden h-[400px] md:h-[500px] lg:h-[704px]">
            <Image 
              src="/home1.webp" 
              alt="civil-engineering" 
              width={756} 
              height={704}
              className="object-cover w-full h-full"
            />
          </div>
          
          {/* Right Column - Content */}
          <div className="flex flex-col justify-center px-6 md:px-10 lg:px-16 py-10 md:py-16 lg:py-20">
            <div className="mb-8 md:mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                <span className="text-[#444444]">STRU</span><span className="text-[#E68126]">VE</span>
                <br />
                <span className="text-lg md:text-xl lg:text-[1.55rem] font-bold text-[#444444]">Structural Value Engineering</span>
              </h1>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg text-justify leading-relaxed">
                <span className="font-bold">STRU<span className="text-[#E68126]">VE</span></span> is an international engineering firm that is actively engaged in the value engineering aspect of the built environment.
              </p>
              
              <p className="text-lg text-justify leading-relaxed">
                <span className="font-bold">STRU<span className="text-[#E68126]">VE</span></span> utilizes a diverse team of specialists with worldwide expertise, from KSA and the Middle East to USA. We are fully equipped to serve our clients around the globe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="w-full bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 w-full">
          {/* Left Column - Content */}
          <div className="flex flex-col px-6 md:px-10 lg:px-16 py-10 md:py-16 lg:py-20 space-y-10 md:space-y-16 justify-center">
            {/* What Is Value Engineering */}
            <div>
              <h2 className="text-lg md:text-xl font-bold text-[#444444] mb-6 md:mb-10 leading-tight">
                What Is<br />
                Value Engineering?
              </h2>
              <p className="text-sm md:text-base text-justify leading-relaxed text-[#444444]">
                <span className="font-bold">Value Engineering</span> in construction is defined as a systematic and organized process to identify necessary functions of a design in a project and to provide alternative solutions at a lower cost, while maintaining or surpassing original quality, safety, function and construction schedule.
              </p>
            </div>

            {/* Why Structural Value Engineering */}
            <div>
              <h2 className="text-lg md:text-xl font-bold text-[#444444] mb-6 md:mb-10 leading-tight">
                Why<br />
                Structural Value Engineering?
              </h2>
              <p className="text-sm md:text-base text-justify leading-relaxed text-[#444444]">
                Whilst other disciplines must satisfy certain aesthetic and functional requirements that might be sensitive to cost reduction, the only requirement for the structural discipline is to support a specific load value while respecting the building constraints and design standards. Accordingly, any structural alternative that can achieve this requirement will have <span className="font-bold">zero</span> impact on the value of the project, irrespective of its cost reduction.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex items-start justify-center overflow-hidden h-[400px] md:h-[500px] lg:h-[631px] order-first lg:order-last">
            <Image 
              src="/home1.webp" 
              alt="building-interior-design" 
              width={625} 
              height={631}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
