import React from "react";
import { projects, components } from "@/assets/assets";
import * as Icons from "react-icons/fa";

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
        {projects
          .slice(0)
          .reverse()
          .map((project, index) => (
            <CardProject key={project.id} index={index} {...project} />
          ))}
      </div>
      
      {/* Component Projects */}
      <div className="flex flex-col w-full">
        <aside className="pt-12 lg:pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {components.map((props) => (
            <ComponentProject key={props.id} {...props} />
          ))}
        </aside>
      </div>
    </section>
  );
};

const CardProject = (props) => {
  return (
    <article
      className={`group bg-white shadow-lg rounded-2xl p-4 sm:p-6 lg:p-8 text-center flex flex-col gap-6 lg:gap-8 
        md:flex-row md:text-left hover:shadow-xl transition-all duration-300 hover:-translate-y-1
        ${props.index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
    >
      <div className="w-full md:w-1/2 flex-shrink-0">
        <img
          src={`${props.image}`}
          alt={props.title}
          className="w-full rounded-2xl lg:rounded-3xl shadow-lg h-48 sm:h-60 lg:h-80 object-cover 
            group-hover:scale-105 transition-transform duration-300"
        />
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
  return (
    <>
      {props.link !== "" && (
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
      )}
    </>
  );
};

const ComponentProject = (props) => {
  return (
    <article className="group bg-white rounded-2xl lg:rounded-3xl overflow-hidden p-3 sm:p-4 shadow-lg 
      hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
      <div className="overflow-hidden rounded-xl lg:rounded-2xl">
        <img
          src={`${props.image}`}
          alt={props.title}
          className="w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <h2 className="text-lg sm:text-xl font-bold mt-3 sm:mt-4 mb-2 group-hover:text-blue-600 transition-colors duration-300">
        {props.title}
      </h2>
      <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
        {props.description}
      </p>
      <div className="flex gap-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={props.codeLink}
          className="flex-1 text-center py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg no-underline bg-gray-100 text-black 
            transition-all duration-300 ease-in-out hover:scale-105 hover:text-white hover:bg-blue-600 text-xs sm:text-sm font-medium"
        >
          Code
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={props.viewLink}
          className="flex-1 text-center py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg no-underline bg-gray-100 text-black 
            transition-all duration-300 ease-in-out hover:scale-105 hover:text-white hover:bg-blue-600 text-xs sm:text-sm font-medium"
        >
          View
        </a>
      </div>
    </article>
  );
};

export default Projects;