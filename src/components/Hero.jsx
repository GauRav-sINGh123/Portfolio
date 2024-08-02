import React from "react";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import Animated from "./Animated";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-full mt-20 text-white    ">
      <motion.div
        className="flex flex-col justify-center items-center text-center md:text-left md:w-[70%]   "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl font-bold ">Hi! </h3>
        <h1 className="text-4xl md:text-6xl font-bold">I'm Gaurav Singh</h1>
        <div className="flex justify-center items-center mt-2 gap-2">
          <FaReact className="text-4xl" />
          <h2 className="text-3xl my-4"> ReactJs Developer</h2>
        </div>

        <p></p>
        <Button />
      </motion.div>
      <div className="w-[30%] ">
        <Animated />
      </div>
    </div>
  );
};

export default Hero;
