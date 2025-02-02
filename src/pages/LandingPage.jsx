import React from 'react'
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Home from './Home';

const LandingPage = () => {
    const [showLanding, setShowLanding] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setShowLanding(true)
        },2000);
    },[])

    const letters = "GCORE".split("");

  return (
    <div className="bg-black min-h-screen overflow-hidden font-sans text-white relative">
        {!showLanding ? (
        <div className="flex items-center justify-center h-screen bg-black">
            <div className="flex space-x-2 text-8xl font-bold">
                {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                    {letter}
                </motion.span>
                ))}
            </div>
        </div>
        ):(
            <Home/>
        )}
    </div>
  )
}

export default LandingPage