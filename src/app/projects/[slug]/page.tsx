'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import projects from '../../../data/projects.json';
import ImageModal from '../../../components/ImageModal';

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
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
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

  const galleryImages = project.gallery || [project.image];

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => 
      prev < galleryImages.length - 1 ? prev + 1 : prev
    );
  };

  const handlePreviousImage = () => {
    setSelectedImageIndex((prev) => prev > 0 ? prev - 1 : prev);
  };

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
                className="relative inline-flex items-center text-gray-600 hover:text-gray-800 text-base transition-colors after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-orange-400 after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
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
          </div>
        </div>
      </div>

      {/* Project Gallery Section - Full Width Outside Container */}
      <div className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl text-center font-serif text-gray-800 mb-16">
            Project Gallery
          </h2>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
            {galleryImages.map((imageSrc, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] bg-gray-200 cursor-pointer overflow-hidden group"
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={imageSrc}
                  alt={`${project.name} gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
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

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={galleryImages[selectedImageIndex]}
        imageAlt={`${project.name} gallery image ${selectedImageIndex + 1}`}
        currentIndex={selectedImageIndex}
        totalImages={galleryImages.length}
        onNext={handleNextImage}
        onPrevious={handlePreviousImage}
      />
    </div>
  );
}
