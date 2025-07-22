import React, { useState } from "react";
import { projects } from "@/assets/assets";
import * as Icons from "react-icons/fa";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects" className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] xl:px-[12%] py-10 scroll-mt-20">
      <div className="text-center mb-12">
        <h4 className="text-base sm:text-lg mb-2 font-Ovo">My Work</h4>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-Ovo">Portfolio</h2>
        <p className="mt-4 sm:mt-6 max-w-3xl mx-auto font-Ovo text-sm sm:text-base md:text-lg leading-relaxed">
          Each project represents a journey of transforming innovative ideas into tangible solutions. 
          Explore my work spanning Web Development, Mobile Development, and Machine Learning — 
          where research meets production and dreams become code.
        </p>
      </div>
      
      {/* Main Projects */}
      <div className="flex flex-col gap-12 lg:gap-20 w-full mt-8">
        {projects.map((project, index) => (
          <CardProject key={project.id} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

const CardProject = (props) => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Create full gallery with main image first, filtering out undefined/null images
  const fullGallery = [props.image, ...(props.gallery || [])].filter(Boolean);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? fullGallery.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === fullGallery.length - 1 ? 0 : prev + 1
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') setShowGallery(false);
    if (e.key === 'ArrowLeft') handlePrevImage();
    if (e.key === 'ArrowRight') handleNextImage();
  };

  return (
    <>
      <article
        className={`group bg-white shadow-lg rounded-2xl p-4 sm:p-6 lg:p-8 text-center flex flex-col gap-6 lg:gap-8 
          md:flex-row md:text-left hover:shadow-xl transition-all duration-300 hover:-translate-y-1
          ${props.index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
      >
        <div className="w-full md:w-1/2 flex-shrink-0">
          <div 
            className="relative cursor-pointer"
            onClick={() => setShowGallery(true)}
          >
            <div className="relative w-full h-48 sm:h-60 lg:h-80 overflow-hidden rounded-2xl lg:rounded-3xl shadow-lg group-hover:scale-105 transition-transform duration-300">
              <Image
                src={props.image}
                alt={props.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 
              transition-all duration-300 rounded-2xl lg:rounded-3xl flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                bg-black bg-opacity-50 px-4 py-2 rounded-lg flex items-center gap-2">
                <Icons.FaImages /> View Gallery
              </span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 lg:mb-4 group-hover:text-blue-600 transition-colors duration-300">
            {props.title}
          </h3>
          <p className="text-gray-600 mb-4 lg:mb-6 text-sm sm:text-base leading-relaxed">
            {props.description}
          </p>
          <div className="w-full flex flex-row flex-wrap gap-2 mb-6 lg:mb-8 justify-center md:justify-start">
            {props.skills.map((skill) => (
              <CardSkill key={skill} name={skill} />
            ))}
          </div>
          <div className="flex flex-row flex-wrap justify-center md:justify-start gap-4 lg:gap-8">
            {props.links.map((link) => (
              <CardLink key={link.id} {...link} />
            ))}
          </div>
        </div>
      </article>

      {/* Image Gallery Modal */}
      {showGallery && fullGallery.length > 0 && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowGallery(false)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-6xl w-full h-full flex flex-col">
            {/* Close button */}
            <button 
              onClick={() => setShowGallery(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <FaTimes size={24} />
            </button>

            {/* Image counter */}
            <div className="text-white text-center mb-4">
              {currentImageIndex + 1} / {fullGallery.length}
            </div>

            {/* Main image display */}
            <div className="flex-1 flex items-center justify-center relative">
              <div className="relative w-full h-full">
                <Image 
                  src={fullGallery[currentImageIndex]}
                  alt={`${props.title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                  onClick={(e) => e.stopPropagation()}
                  sizes="100vw"
                />
              </div>

              {/* Navigation buttons */}
              {fullGallery.length > 1 && (
                <>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevImage();
                    }}
                    className="absolute left-4 text-white hover:text-gray-300 transition-colors 
                      bg-black bg-opacity-50 p-3 rounded-full"
                  >
                    <FaChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNextImage();
                    }}
                    className="absolute right-4 text-white hover:text-gray-300 transition-colors 
                      bg-black bg-opacity-50 p-3 rounded-full"
                  >
                    <FaChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail strip */}
            {fullGallery.length > 1 && (
              <div className="flex gap-2 justify-center mt-4 overflow-x-auto p-2">
                {fullGallery.map((img, index) => (
                  <div 
                    key={index}
                    className={`relative w-20 h-20 overflow-hidden rounded cursor-pointer transition-all duration-200
                      ${index === currentImageIndex 
                        ? 'ring-2 ring-white scale-110' 
                        : 'opacity-70 hover:opacity-100'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                  >
                    <Image 
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

const CardSkill = (props) => {
  return (
    <div className="py-1.5 sm:py-2 px-2 sm:px-3 shadow-md rounded-lg bg-gray-50 hover:bg-blue-50 hover:shadow-lg transition-all duration-200">
      <span className="font-medium text-xs sm:text-sm">{props.name}</span>
    </div>
  );
};

const CardLink = (props) => {
  const IconComponent = Icons[props.icon];
  
  // Don't render if no link is provided
  if (!props.link || props.link === "") {
    return null;
  }
  
  return (
    <div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={props.link}
        className="text-sm sm:text-base flex items-center justify-center text-black no-underline gap-1 sm:gap-2 
          py-2 px-3 rounded-lg transition-all duration-300 hover:text-blue-600 hover:bg-blue-50 hover:scale-105"
      >
        {props.title} <IconComponent size="1.2rem" className="sm:w-8 sm:h-8" />
      </a>
    </div>
  );
};

export default Projects;