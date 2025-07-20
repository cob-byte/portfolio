import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <div className="flex flex-col justify-center items-center text-center ">
        <h4 className="text-lg font-Ovo">What I offer</h4>
        <h2 className="text-5xl font-Ovo mt-2 mb-4">My Services</h2>
      </div>
      
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <li
            className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer flex flex-col items-center text-center hover:bg-blue-50 hover:-translate-y-1 duration-500 hover:shadow-black justify-between"
            key={index}
          >
            <Image src={icon} alt={title} className="w-12 aspect-square" />
            <h3 className="text-lg my-4 font-semibold text-gray-700">{title}</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-5">{description}</p>
            <a href={link} className="text-xs sm:text-sm md:text-base flex items-center gap-2 mt-5 text-blue-600 hover:text-blue-800 transition-colors font-medium">
              Get Started <Image alt="" src={assets.right_arrow} className="w-4"/> 
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;