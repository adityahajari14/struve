'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import projects from '../../../data/projects.json';

// Helper function to convert project name to slug
function createSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
}

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  // Find project by matching slug
  const project = projects.find(p => createSlug(p.name) === slug);
  const projectId = project?.id;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <Link href="/projects" className="text-blue-600 hover:underline">
            Back to Experience
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image with Overlapping Content Section */}
      <div className="relative w-full">
        {/* Hero Image - Full Height */}
        <div className="relative w-full h-screen bg-gray-200">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* White Content Box Overlapping Image */}
        <div className="relative max-w-5xl mx-auto px-6 md:px-12">
          <div className="bg-white -mt-[20vh] px-8 md:px-16 pt-12 pb-16">
            {/* Back Button */}
            <div className="mb-10">
              <Link 
                href="/projects"
                className="text-gray-600 hover:text-gray-800 text-sm transition-colors"
              >
                &lt; Back
              </Link>
            </div>

            {/* Project Title */}
            <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-10 leading-tight">
              {project.name}
            </h1>

            {/* Project Description */}
            <div className="space-y-6 mb-12">
              {project.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Value Engineering Proposal Section */}
            <div className="mb-16">
              <h2 className="text-base text-orange-500 font-medium mb-6">
                Value Engineering Proposal
              </h2>
              
              <div className="space-y-6">
                {project.valueEngineeringProposal.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-base text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Power in Numbers Section */}
            <div className="py-16 border-t border-gray-200">
              <h2 className="text-2xl md:text-3xl text-center font-serif text-gray-800 mb-20">
                Power in Numbers
              </h2>
              
              <div className="grid grid-cols-3 gap-12 md:gap-20 mb-20">
                {/* Programs */}
                <div className="text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-6 bg-gray-900"></div>
                  <h3 className="text-lg md:text-xl text-gray-800">Programs</h3>
                </div>
                
                {/* Locations */}
                <div className="text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-6 bg-gray-900 rounded-full"></div>
                  <h3 className="text-lg md:text-xl text-gray-800">Locations</h3>
                </div>
                
                {/* Volunteers */}
                <div className="text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-6 bg-gray-900" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
                  <h3 className="text-lg md:text-xl text-gray-800">Volunteers</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Gallery Section - Full Width Outside Container */}
      <div className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl text-center font-serif text-gray-800 mb-16">
            Project Gallery
          </h2>
          
          {/* Gallery Image - Smaller */}
          <div className="mb-20">
            <div className="relative aspect-[16/10] md:aspect-[4/3] max-w-sm bg-gray-200">
              <Image
                src={project.image}
                alt={`${project.name} gallery`}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            {projectId && projectId > 1 ? (
              <Link 
                href={`/projects/${createSlug(projects[projectId - 2].name)}`}
                className="text-gray-400 hover:text-gray-600 text-sm transition-colors"
              >
                Previous
              </Link>
            ) : (
              <span className="text-gray-300 text-sm">Previous</span>
            )}
            
            {projectId && projectId < projects.length ? (
              <Link 
                href={`/projects/${createSlug(projects[projectId].name)}`}
                className="text-gray-800 hover:text-gray-600 text-sm transition-colors"
              >
                Next
              </Link>
            ) : (
              <span className="text-gray-300 text-sm">Next</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
