import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Code.</motion.b>Create.
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Deliver.</motion.b>Innovate.
          </h1>
          <button>IM EXPERT IN</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black", }}
        >
          <h2>Full-Stack Development</h2>
          <hr />
          <p>
            I'm proficient in front-end technologies like <span>React,Html, Css, Tailwind, Boostrap and Javascript</span> and back-end technologies like <span>Node.js, Express.js, Java, Spring Boot,Php and Python</span>.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Android Development</h2>
          <hr />
          <p>
            I'm skilled in Java and Kotlin technolohies for android development and also 
            skilled in using tools android studio.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>UI/UX Designing</h2>
          <hr />
          <p>
            I'm skilled in using tools like <span>Adobe XD, Figma, Sketch and Photoshop</span> for designing user interfaces and user experiences.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
