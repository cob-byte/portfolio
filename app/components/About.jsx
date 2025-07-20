import { assets, infoList, skillsData } from "@/assets/assets";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full px-[12%] scroll-mt-20" id="about">
      {/* Main content container with max width and centered */}
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center">
          <h4 className="text-lg mb-2 font-Ovo">Introduction</h4>
          <h2 className="text-5xl font-Ovo">About Me</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] items-start gap-20 my-20">
          <div className="w-48 sm:w-64 md:w-80 lg:w-80 self-stretch mx-auto lg:mx-0 group relative cursor-pointer">
            {/* Main image container with hover effect */}
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg group-hover:shadow-2xl transition-all duration-500 ease-in-out">
              <Image
                src={assets.user_image}
                alt="user_image"
                className="w-full h-96 sm:h-[500px] md:h-[600px] lg:h-[600px] object-cover 
                           transition-transform duration-500 ease-in-out
                           group-hover:scale-105"
                fill={false}
              />
              
              {/* Subtle overlay with info on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                            flex items-end justify-center pb-8 pointer-events-none">
                <div className="text-white text-center">
                  <p className="text-sm font-medium mb-1">Software Engineer</p>
                  <p className="text-xs opacity-90">Web & Mobile Development</p>
                </div>
              </div>
              
              {/* border highlight */}
              <div className="absolute inset-0 rounded-3xl border-2 border-blue-500/0 group-hover:border-blue-500/30 transition-all duration-300"></div>
            </div>
          </div>
          
          <div className="flex flex-col">
            <div className="mb-10 max-w-2xl font-Ovo space-y-6 mx-auto lg:mx-0 text-sm sm:text-base md:text-lg">
              <p>
                I'm a <strong>Software Engineer</strong>, 
                specializing in Web and Mobile Development. As a recent graduate from 
                <strong> Pamantasan ng Lungsod ng Maynila</strong>, I transform innovative ideas into 
                tangible solutions through research, development, and implementation.
              </p>
              
              <p>
                My expertise spans <strong>Web and Mobile Development</strong>, 
                and <strong>Computer Vision</strong>. I've built facial recognition systems, smart shopping 
                solutions, and gesture-controlled applications. I'm passionate about crafting dreams into 
                code while fostering collaborative environments where innovation thrives.
              </p>
              
              <p>
                Beyond coding, I'm an ambivert who loves building meaningful connections and turning 
                hobbies into productive outlets for creativity and growth.
              </p>
            </div>
            
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mb-8 mx-auto lg:mx-0">
              {infoList.map(({ icon, iconDark, title, description }, index) => (
                <li
                  className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer flex flex-col items-center text-center hover:bg-blue-50 hover:-translate-y-1 duration-500 hover:shadow-black"
                  key={index}
                >
                  <Image src={icon} alt={title} className="w-7" />
                  <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">{description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Skills section */}
        <div className="w-full my-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-Ovo">Skills</h2>
          </div>

          <div className="micro-cards skill-cards">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="micro-card skill-card hover"
              >
                <div>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="rot"
                    width="40"
                    height="40"
                    style={{ width: '40px', height: '40px', objectFit: 'contain' }}
                  />
                </div>
                <span className="text-xs sm:text-sm md:text-base">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;