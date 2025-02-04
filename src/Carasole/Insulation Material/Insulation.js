import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";  // Importing framer motion
import './Insultion.css';

export default function Insulation() {
  // Define the animation variants for Insulation
  const pageVariants = {
    hidden: { opacity: 0, y: 50 },  // Start hidden with a little downward offset
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },  // Fade in with upward movement
    exit: { opacity: 0, y: -50, transition: { duration: 0.5, ease: "easeIn" } },  // Fade out with upward movement
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100 },  // Initially offscreen to the left
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },  // Slide in from left
  };

  return (
    <motion.div 
      className="Insulation container"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageVariants}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="outer-br row justify-content-center align-items-center">
            <div className="middle-br row justify-content-center align-items-center">
              <div className="inner-br-i">
                <motion.div
                  className="inner-txt"
                  variants={textVariants}
                >
                  <p>Welcome To Foilam Global</p>
                  <h1>Laminated Metalized Film <br />Manufacturer</h1>

                  {/* <div className="car-btn row caras-sm">
                    <div className="col-auto">
                      <Link to="/Insulation">
                        <button className="caras-btn">Learn More</button>
                      </Link>
                    </div>
                    <div className="col-auto">
                    <Link to="/contact">
                      <button className="caras-btn">
                        Send a Request
                      </button>
                      </Link>
                    </div>
                  </div> */}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
