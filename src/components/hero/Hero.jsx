import "./hero.scss";
import { motion } from "framer-motion";
import scroll_icon from "../Assests/scroll.png";
import hero_icon from "../Assests/hero3.png";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
       
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>DHANANJAYA KUMARA</motion.h2>
          <motion.h1 variants={textVariants}>
            Full-Stack Developer and UI Designer
          </motion.h1>
            <motion.div variants={textVariants} className="nav_button">
              <motion.button variants={textVariants}>
                See the Latest Works
              </motion.button>
              <motion.button variants={textVariants}>Contact Me</motion.button>
              <motion.button variants={textVariants} onClick={() => window.open("/cv.pdf")}>
                Download CV
              </motion.button>
              
            </motion.div>
            <motion.img
              variants={textVariants}
              animate="scrollButton"
                src={scroll_icon}
              alt=""
            />
          </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Developer  Content Creator  Freelanzer
      </motion.div>
      <div className="imageContainer">
        <img src={hero_icon} alt="" />
      </div>
    </div>
  );
};

export default Hero;
