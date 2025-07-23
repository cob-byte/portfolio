"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { ReactTyped } from "react-typed";

const Header = () => {
  return (
      <div className="flex flex-col items-center justify-center text-center max-w-3xl w-11/12 gap-4 mx-auto mb-10">  
      <Image
        src={assets.profile_img}
        alt="profile_img"
        className="rounded-full w-32"
      />
      
      <h3 className="flex items-center gap-2 text-xl md:text-2xl font-Ovo">
        Hi! I'm Jacob {" "}
        <Image src={assets.hand_icon} alt="hand_icon" className="w-6" />
      </h3>

      {/* Typing Animation Section */}
      <div className="text-2xl md:text-3xl font-Ovo">
        <span id="iama">I enjoy building with</span>&nbsp;&nbsp;
        <ReactTyped
          strings={[
            '<span style="color: #ff2d20;">Wordpress</span>',
            '<span style="color: #e34f26;">HTML</span>, <span style="color: #1572b6;">CSS</span>, <span style="color: #f7df1e;">JS</span>',
            '<span style="color: #61dafb;">React Native</span>',
            '<span style="color: #000020;">Expo</span>',
            '<span style="color: #3776ab;">Python</span>', 
            '<span style="color: #ff6b6b;">Computer Vision</span>',
            '<span style="color: #092e20;">Django</span>', 
            '<span style="color: #336791;">PostgreSQL</span>',
            '<span style="color: #336791;">MySQL</span>',
          ]}
          typeSpeed={50}
          backSpeed={10}
          backDelay={2000}
          loop
          className="text-blue-600 font-semibold"
        />
      </div>
      
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Software Engineer based in Philippines.
      </h1>
      
      <p className="max-w-2xl mx-auto font-Ovo text-sm sm:text-base md:text-lg">
        I am a Software Engineer from Manila, Philippines with years of
        experience specializing in Web and Mobile Development, Machine Learning, and creating 
        innovative solutions from research to production.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a 
          href="#contact" 
          className="flex items-center gap-2 px-10 py-3 border border-white bg-black rounded-full text-white hover:bg-gray-800 transition-colors"
        >
          Contact Me{" "}
          <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </a>
        
        <a
          href="/Barcelona-Resume.pdf"
          download
          className="flex items-center gap-2 px-10 py-3 border rounded-full border-gray-500 hover:bg-gray-100 transition-colors"
        >
          My Resume <Image src={assets.download_icon} alt="download" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;