import React from 'react'
import { motion } from "framer-motion";
import aiGif from '../assets/Sci-FiArtGIF.gif'

const Home = () => {
    const letters = "GCORE".split("");
  return (
    <div className="min-h-screen overflow-hidden font-sans text-white relative">
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 1.5 }}
        >
          <motion.img
            initial={{ scale: 1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={aiGif}
            alt="Background"
            className="w-full object-center object-cover absolute inset-0 z-0"
          />
          
          <nav className="bg-transparent py-4 px-8 flex justify-between items-center fixed w-full top-0 z-10">
            <motion.h1 className="font-semibold cursor-pointer">
                {letters.map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15, duration: 2 }}
                  >
                    {letter}
                  </motion.span>
                ))}
            </motion.h1> 
            <ul className="flex space-x-6 text-sm font-semibold">
              <motion.li
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 1 }}
              >
                <a href="#" className="flex items-end gap-0.5 text-white hover:text-orange-500 text-lg">
                  Products
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                </a>
              </motion.li>
              <motion.li
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 1 }}
              >
                <a href="#" className="text-white hover:text-orange-500 text-lg">
                  Pricing
                </a>
              </motion.li>
              <motion.li
                  initial={{ opacity: 0, y: 70 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 1 }}
              >
                <a href="#" className="flex items-end gap-0.5 text-white hover:text-orange-500 text-lg">
                  Resources
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                </a>
              </motion.li>
              <motion.li
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 1 }}
              >
                <a href="#" className="flex items-end gap-0.5 text-white hover:text-orange-500 text-lg">
                  Partners
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                </a>
              </motion.li>
              <motion.li
                  initial={{ opacity: 0, y: 90 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 1 }}
              >
                <a href="#" className="flex items-end gap-0.5 text-white hover:text-orange-500 text-lg">
                  Why Gcore
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                </a>
              </motion.li>
            </ul>
            <div>
              <motion.button
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="bg-gray-400 px-4 py-2 rounded-4xl text-white hover:bg-gray-300 transition cursor-pointer">
                Contact Us
              </motion.button>
              <motion.button 
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="ml-4 bg-orange-500 px-4 py-2 rounded-4xl text-white hover:bg-orange-600 transition cursor-pointer">
                Sign Up for Free
              </motion.button>
            </div>
          </nav>

          
          <header className="flex flex-col items-center justify-center text-center py-40 bg-transparent relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-20"></div>
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: "0" }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: "easeIn"
              }}
              className="px-4 py-2 bg-black text-sm font-bold rounded-full">
                Beta Release
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-6xl font-bold my-6">
                Inference at the Edge
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }} 
              className="text-lg mb-8 max-w-3xl">
              Boost your AI application's speed and efficiency globally by bringing inference closer to your users.
              Enjoy customization and cost-efficiency for a best-in-class inference experience.
            </motion.p>
            <div className='flex'>
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="bg-orange-500 px-6 py-3 rounded-lg text-white font-semibold text-lg hover:bg-orange-600 mr-4 cursor-pointer">
                Get Started
              </motion.button>
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="border-2 border-white px-6 py-3 rounded-lg text-white font-semibold text-lg hover:bg-white hover:text-black cursor-pointer">
                Book a Demo
              </motion.button>
            </div>
          </header>
          
        </motion.div>
    </div>
  )
}

export default Home