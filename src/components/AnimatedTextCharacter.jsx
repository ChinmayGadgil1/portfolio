import { motion } from "framer-motion";

const AnimatedTextWord = ({text}) => {
    const words = text.split(" ");

    const letters=Array.from(text)
  
  // Variants for Container of words.
    const container = {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
      }),
    };
  
  // Variants for each word.
  
    const child = {
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
      hidden: {
        opacity: 0,
        x: 20,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
    };


    return (
        <motion.div className="text-6xl font-bold p-4 m-4"
          style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {letters.map((letter, index) => (
            <motion.span variants={child} key={index} className="text-6xl font-extrabold">
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>
      );
    };
    
export default AnimatedTextWord;