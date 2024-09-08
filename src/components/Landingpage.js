import React from 'react';
import { motion } from 'framer-motion';
import logo from './lgo.jpeg';

const LandingPage = () => {
  const whatsappUrl = `https://wa.me/+919557338330`;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center p-6">
      
      <motion.img
        src={logo} 
        alt="Dexter Luxuries Logo"
        className="w-48 h-48 mb-4"
        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      
      <motion.h1 
        className="text-4xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Dexter Luxuries
      </motion.h1>

      <motion.p 
        className="text-xl text-gray-700 mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Your premium source for digital products.
      </motion.p>

      <motion.a
        href={whatsappUrl}
        className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Contact Us on WhatsApp
      </motion.a>
    </div>
  );
};

export default LandingPage;
