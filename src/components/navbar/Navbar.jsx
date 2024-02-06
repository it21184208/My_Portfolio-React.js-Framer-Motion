import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import facebook_icon from "../Assests/facebook.png";
import instagram_icon from "../Assests/instagram.png";
import github_icon from "../Assests/github.png";
import linkedin_icon from "../Assests/linkdin.jpg";


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
            <img src={facebook_icon} alt="" />
          </a>
          <a href="#">
            <img src={instagram_icon} alt="" />
          </a>
          <a href="https://github.com/it21184208">
            <img src={github_icon} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/dhananjaya-kumara-39766721b/">
            <img src={linkedin_icon} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
