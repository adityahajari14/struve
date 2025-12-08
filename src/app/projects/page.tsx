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
    <main className="w-full bg-white pt-24">
      {/* Page Title Section */}
      <section className="w-full py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center text-[56px] font-serif text-gray-700 leading-tight">
            Projects
          </h1>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project) => (
              <div key={project.id} className="relative mb-32 w-full">
                {/* Project Image Container */}
                <div className="relative aspect-4/3 w-[80%] bg-gray-300 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="100%"
                  />
                </div>

                {/* Project Info Box - Absolutely positioned to overlap */}
                <div className="absolute top-20 left-30 bg-white mx-8 p-10 shadow-lg">
                  {/* Project Title */}
                  <h2 className="text-[26px] font-serif text-gray-800 mb-4 leading-[1.4em]">
                    {project.name}
                  </h2>

                  {/* Project Description */}
                  <p className="text-[14px] text-gray-700 leading-[1.6em] mb-6 line-clamp-6">
                    {project.description}
                  </p>

                  {/* Read More Button */}
                  <Link
                    href={`/projects/${createSlug(project.name)}`}
                    className="inline-block px-8 py-2.5 border border-[#7986CB] text-[#7986CB] text-sm hover:bg-gray-50 transition-colors duration-200"
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
