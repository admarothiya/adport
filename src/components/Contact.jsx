import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message
    };

    emailjs.send(
      'YOUR_SERVICE_ID',    // Replace with your Service ID
      'YOUR_TEMPLATE_ID',   // Replace with your Template ID
      templateParams,
      'YOUR_PUBLIC_KEY'     // Replace with your Public Key
    )
    .then((response) => {
      alert('Message Sent Successfully!');
      setName('');
      setEmail('');
      setMessage('');
    }, (err) => {
      alert('Failed to send message, please try again.');
      console.error('FAILED...', err);
    });
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen pt-32 md:pt-26 px-6 py-12 bg-gradient-to-b from-gray-800 to-blue-900 text-gray-100 overflow-hidden">

      {/* Badge */}
      <div className="text-center mb-4">
        <span className="px-4 py-1 rounded-full bg-blue-900 text-blue-300 text-sm font-semibold">
          ⭐ Ready to Join Your Team
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-center text-4xl font-bold">
        Let's <span className="text-green-400">Connect</span>
      </h2>

      {/* Subheading */}
      <p className="text-center text-gray-300 mt-2">
        <span className="text-blue-300 font-medium">Production-ready developer</span> seeking immediate opportunities.{' '}
        <span className="text-green-400 font-medium">Available for full-time roles.</span>
      </p>

      {/* Main Content */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

        {/* Contact Info */}
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-4 text-white">Contact Information</h3>

          <div className="space-y-4 text-left text-gray-300">

            <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-md hover:bg-blue-800 cursor-pointer transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <div className="bg-blue-700 text-white p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 01-8 0 4 4 0 018 0zm-4 0v1" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a href="mailto:admarothiya@gmail.com" className="text-blue-300 font-medium">admarothiya@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-md hover:bg-green-800 cursor-pointer transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <div className="bg-green-700 text-white p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.586a1 1 0 01.707.293l2.414 2.414a1 1 0 010 1.414L9 10l4 4 3.879-3.879a1 1 0 011.414 0l2.414 2.414a1 1 0 01.293.707V19a2 2 0 01-2 2h-1C6.477 21 3 17.523 3 13V6a1 1 0 010-1z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <a href="tel:+919358252866" className="text-blue-300 font-medium">+91 9358252866</a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-md hover:bg-purple-800 cursor-pointer transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <div className="bg-purple-700 text-white p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zm0 0c3.866 0 7 3.134 7 7H5c0-3.866 3.134-7 7-7z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-gray-300 font-medium">Rajasthan, India</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-md hover:bg-indigo-800 cursor-pointer transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <div className="bg-indigo-700 text-white p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21h8a2 2 0 002-2v-5.586a1 1 0 00-.293-.707l-6-6a1 1 0 00-1.414 0l-6 6A1 1 0 004 13.414V19a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">Portfolio</p>
                <a href="https://python-2r54.onrender.com" target="_blank" rel="noreferrer" className="text-blue-300 font-medium">
                  python-2r54.onrender.com
                </a>
              </div>
            </div>

          </div>

          {/* Social */}
          <div className="flex items-center gap-4 mt-6">
            <a href="https://github.com/admarothiya" target="_blank" rel="noreferrer" className="bg-black text-white p-3 rounded-md text-xl hover:opacity-90 transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/aditya-kumawat-5-903166250/" target="_blank" rel="noreferrer" className="bg-[#0077b5] text-white p-3 rounded-md text-xl hover:opacity-90 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Quick Message Form */}
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Message</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-700 bg-gray-900 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-700 bg-gray-900 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-700 bg-gray-900 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-md font-semibold hover:opacity-90 transition"
            >
              📤 Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
