'use client';

import projects from '../../data/projects.json';
import Image from 'next/image';
import Link from 'next/link';

// Helper function to convert project name to slug
function createSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
}

export default function ExperiencePage() {
  return (
    <main className="w-full bg-white pt-16 md:pt-20 lg:pt-24">
      {/* Page Title Section */}
      <section className="w-full py-8 md:py-12 lg:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center text-3xl md:text-4xl lg:text-[56px] font-serif text-gray-700 leading-tight">
            Projects
          </h1>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full px-4 md:px-6 pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {projects.map((project) => (
              <div key={project.id} className="relative mb-12 md:mb-20 lg:mb-32 w-full">
                {/* Project Image Container */}
                <div className="relative aspect-4/3 w-full md:w-[80%] bg-gray-300 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="100%"
                  />
                </div>

                {/* Project Info Box - Absolutely positioned to overlap on desktop, stacked on mobile */}
                <div className="relative md:absolute md:top-12 lg:top-20 md:left-20 lg:left-30 bg-white mt-4 md:mt-0 md:mx-4 lg:mx-8 p-6 md:p-8 lg:p-10 shadow-lg">
                  {/* Project Title */}
                  <h2 className="text-xl md:text-2xl lg:text-[26px] font-serif text-gray-800 mb-3 md:mb-4 leading-[1.4em]">
                    {project.name}
                  </h2>

                  {/* Project Description */}
                  <p className="text-sm md:text-[14px] text-gray-700 leading-[1.6em] mb-4 md:mb-6 line-clamp-6">
                    {project.description}
                  </p>

                  {/* Read More Button */}
                  <Link
                    href={`/projects/${createSlug(project.name)}`}
                    className="inline-block px-6 md:px-8 py-2 md:py-2.5 border border-[#7986CB] text-[#7986CB] text-sm hover:bg-gray-50 transition-colors duration-200"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
