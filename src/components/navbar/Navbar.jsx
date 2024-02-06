import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/dananjaya.kumara.5872/">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://github.com/it21184208">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/dhananjaya-kumara-39766721b/">
            <img src="/linkdin.jpg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
