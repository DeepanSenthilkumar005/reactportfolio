import React, { useState } from "react";
import { BsSend, BsGithub, BsTelephone, BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { GrMailOption } from "react-icons/gr";
import { SlLocationPin } from "react-icons/sl";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    msg: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setStatusMessage("Submitting...");

    console.log("Submitting form:", formData); // Debugging

    try {
      // const response = await fetch("http://localhost:8000/feedback", {
        const response = await fetch("https://portfolio-mern-ko1u.onrender.com/feedback", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response received:", response); // Debugging

      const data = await response.json();
      console.log("Response data:", data); // Debugging

      if (response.ok) {
        setStatusMessage("Feedback submitted successfully!");
        setFormData({ name: "", email: "", phone: "", msg: "" }); // Reset form
      } else {
        setStatusMessage(data.error || "Something went wrong. Try again!");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage("Error connecting to the server.");
    }
  };

  return (
    <section id="Contact" className="text-black dark:text-white justify-items-center w-full md:min:h-full p-4">
      <div data-aos='fade-up' className="head">
        <div className="Heading text-2xl sm:text-xxl font-semibold text-center m-2">
          Contact Us
        </div>
        <div className="SubHeading text-center text-gray-600 dark:text-gray-300 mb-4">
          Let's Get in Touch
        </div>
      </div>

      <div className="Content gap-6 md:px-6 m-3 grid md:grid-cols-2 sm:grid-cols-1 w-full">
        
        {/* Left Content (Form) */}
        <div data-aos='fade-right' className="LeftContent md:order-2 border border-gray-500 rounded-md p-6 shadow-md">
          <form className="w-full mx-auto" onSubmit={handleSubmit}>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                id="floating_name"
                value={formData.name}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                autoComplete='off'
              />
              <label
                htmlFor="floating_name"
                className="absolute text-sm text-gray-500 dark:text-gray-400 transform scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                autoComplete='off'
                required
              />
              <label
                htmlFor="floating_email"
                className="absolute text-sm text-gray-500 dark:text-gray-400 transform scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email Address
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                autoComplete='off'
                placeholder=" "
              />
              <label
                htmlFor="floating_phone"
                className="absolute text-sm text-gray-500 dark:text-gray-400 transform scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone Number (Optional)
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <textarea
                name="msg"
                value={formData.msg}
                onChange={handleChange}
                id="floating_message"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                autoComplete='off'
                required
              ></textarea>
              <label
                htmlFor="floating_message"
                className="absolute text-sm text-gray-500 dark:text-gray-400 transform scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Message
              </label>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white flex items-center justify-center dark:bg-customGreen dark:hover:bg-customGreen bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:focus:ring-green-800"
              >
                Send
                <BsSend className="ml-2" />
              </button>
            </div>
          </form>
          {statusMessage && <p className="text-center text-blue-600 dark:text-green-500 mt-3">{statusMessage}</p>}
        </div>

        {/* Right Content (Contact Info & Social Links) */}
        <div data-aos='fade-left' className="RightContent md:order-1 border border-gray-500 rounded-md p-6 shadow-md">
            <div className="topContent space-y-4">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <BsTelephone className="mr-3 text-blue-600 dark:text-blue-400" />
                <a href="tel:+919442479225" className="hover:underline text-lg font-medium">
                  +91-9442479225
                </a>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <GrMailOption className="mr-3 text-red-600 dark:text-red-400" />
                <a href="mailto:deepancse45@gmail.com" className="hover:underline text-lg font-medium">
                  deepancse45@gmail.com
                </a>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <SlLocationPin className="mr-3 text-green-600 dark:text-green-400" />
                <span className="text-lg font-medium">
                  Namakkal, Tamil Nadu, India
                </span>
              </div>
            </div>
  
            {/* Social Links */}
            <div className="socialLinks mt-6 space-y-4">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <BsGithub className="mr-3 text-black dark:text-white" />
                <a 
                  href="https://github.com/DeepanSenthilkumar005" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline text-lg font-medium"
                >
                  DeepanSenthilkumar005
                </a>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <BsWhatsapp className="mr-3 text-green-600 dark:text-green-400" />
                <a 
                  href="https://wa.me/919442479225" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline text-lg font-medium"
                >
                  919442479225
                </a>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <BsLinkedin className="mr-3 text-blue-600 dark:text-blue-400" />
                <a 
                  href="https://www.linkedin.com/in/deepan-senthilkumar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline text-lg font-medium"
                >
                  deepan-senthilkumar
                </a>
              </div>
            </div>
          </div>
      </div>        
    </section>
  );
}

export default ContactPage;
