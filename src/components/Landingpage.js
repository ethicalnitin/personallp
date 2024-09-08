import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import logo from './lgo.jpeg'; // Replace with your actual logo file
import '../floating.css'; // Import the custom CSS file

const LandingPage = () => {
  const whatsappUrl = `https://alvo.chat/4SC8`; // Your WhatsApp link for purchasing

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-400 to-blue-400 text-center p-6 sm:border-none border-4 border-white rounded-lg">
      
      {/* Logo Animation */}
      <motion.img
        src={logo} 
        alt="Dexter Luxuries Logo"
        className="w-32 h-32 sm:w-48 sm:h-48 mb-4 rounded-full border-4 border-white shadow-xl floating-logo"
        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Welcome Title */}
      <motion.h1 
        className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-sans tracking-wide uppercase"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Dexter Luxuries
      </motion.h1>

      {/* Brand Description */}
      <motion.div 
        className="text-white text-left max-w-md mb-6 space-y-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <ul className="space-y-2 list-disc list-inside">
          <li className="flex items-center capitalize">
            <AiOutlineCheckCircle className="text-green-400 mr-2" />
            Premium OTT subscriptions at unbeatable prices.
          </li>
          <li className="flex items-center capitalize">
            <AiOutlineCheckCircle className="text-green-400 mr-2" />
            Access to all popular software and media files.
          </li>
          <li className="flex items-center capitalize">
            <AiOutlineCheckCircle className="text-green-400 mr-2" />
            Guaranteed 100% satisfaction with our services.
          </li>
          <li className="flex items-center capitalize">
            <AiOutlineCheckCircle className="text-green-400 mr-2" />
            Trusted by thousands, with 2 years of experience on Telegram.
          </li>
          <li className="flex items-center capitalize">
            <AiOutlineCheckCircle className="text-green-400 mr-2" />
            Quick support available on WhatsApp.
          </li>
        </ul>
      </motion.div>

      {/* Product Information (Bold Black) */}
      <motion.div
        className="text-black font-bold text-lg mb-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        Item ID #1211: TradingView Premium Plans 2024 (3/6/12 months)
      </motion.div>

      {/* Buy Now Button */}
      <motion.a
        href={whatsappUrl}
        className="bg-green-500 text-white py-3 px-8 rounded-full flex items-center space-x-2 hover:bg-green-600 transition duration-300 mb-4 border-2 border-white shadow-md"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <FaWhatsapp className="text-2xl" />
        <span>Buy Now</span>
      </motion.a>
    </div>
  );
};

export default LandingPage;
