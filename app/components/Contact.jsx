import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    
    const formDataObj = new FormData(event.target);

    // Get access key from environment variables
    formDataObj.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({ name: "", email: "", message: "" });
        event.target.reset();
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setResult("");
        }, 5000);
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong. Please try again.");
        
        // Clear error message after 5 seconds
        setTimeout(() => {
          setResult("");
        }, 5000);
      }
    } catch (error) {
      console.error("Submit error:", error);
      setResult("Network error. Please check your connection and try again.");
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setResult("");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();

  return (
    <div
      id="contact"
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-[length:90%_auto] bg-center'
    >
      <div className="flex flex-col justify-center items-center text-center font-Ovo">
        <h4 className="text-lg mb-2">Connect with me</h4>
        <h2 className="text-5xl">Get in touch</h2>
        <p className="mt-4 sm:mt-6 max-w-3xl mx-auto font-Ovo text-sm sm:text-base md:text-lg leading-relaxed">
          Ready to bring your ideas to life? I'm always excited to discuss new projects, 
          collaboration opportunities, or answer any questions about my work. Let's connect 
          and create something amazing together.
        </p>
      </div>
      <form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
        <div className="grid grid-cols-(--my-grid-cols) gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
            className={`p-3 outline-none border-[0.5px] rounded-md bg-white transition-all duration-300 ${
              isSubmitting 
                ? 'border-gray-300 bg-gray-50 cursor-not-allowed' 
                : 'border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
            }`}
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={isSubmitting}
            className={`p-3 outline-none border-[0.5px] rounded-md bg-white transition-all duration-300 ${
              isSubmitting 
                ? 'border-gray-300 bg-gray-50 cursor-not-allowed' 
                : 'border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
            }`}
          />
        </div>
        <textarea
          rows={6}
          placeholder="Enter your message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
          className={`p-4 w-full outline-none border-[0.5px] rounded-md bg-white mb-6 transition-all duration-300 resize-none ${
            isSubmitting 
              ? 'border-gray-300 bg-gray-50 cursor-not-allowed' 
              : 'border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
          }`}
        ></textarea>
        <button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className={`py-3 px-8 w-max flex items-center justify-between gap-2 rounded-full mx-auto transition-all duration-500 ${
            !isFormValid || isSubmitting
              ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
              : 'bg-black/80 text-white hover:bg-black hover:scale-105 active:scale-95'
          }`}
        >
          {isSubmitting ? (
            <>
              <span className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
              Sending...
            </>
          ) : (
            <>
              Submit Now
              <Image
                src={assets.right_arrow_white}
                className="w-4"
                alt="send_icon"
              />
            </>
          )}
        </button>
        {result && (
          <p className={`mt-4 text-center font-medium transition-all duration-300 ${
            result.includes('Successfully') 
              ? 'text-green-600' 
              : result.includes('Sending') 
                ? 'text-blue-600' 
                : 'text-red-600'
          }`}>
            {result}
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;