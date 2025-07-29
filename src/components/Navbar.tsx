import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { logo } from "../assets";
import { navLinksdata } from "../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-24 sticky top-0 z-50 backdrop-blur-2xl transition-colors bg-bodyColor/70 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 px-4">
      {/* Logo */}
      <div>
        <img src={logo} alt="logo" />
      </div>

      {/* Desktop Navigation */}
      <div className="flex items-center gap-6">
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Static Label "BHARAT" */}
        <span className="hidden mdl:inline-flex ml-6 px-4 py-1 text-sm font-bold bg-designColor text-black rounded-full shadow hover:bg-orange-500 transition duration-300">
          BHARAT
        </span>

        {/* Mobile Menu Button */}
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
      </div>

      {/* Mobile Navigation Menu */}
      {showMenu && (
        <div className="w-[80%] h-screen mdl:hidden overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
          <div className="flex flex-col gap-8 py-2 relative">
            <div>
              <img className="w-32" src={logo} alt="logo" />
              <p className="text-sm text-gray-400 mt-2">
                My passion lies in developing intelligent systems through machine learning and creating 
                seamless web applications. Join me on a journey through innovation, 
                exploring projects that showcase the fusion of technology and imagination.
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              {navLinksdata.map((item) => (
                <li
                  key={item._id}
                  className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                >
                  <Link
                    onClick={() => setShowMenu(false)}
                    activeClass="active"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4">
              <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
              <div className="flex gap-4">
                <a href="https://github.com/ibharatbishnoi" target="_blank">
                  <span className="bannerIcon">
                    <FaGithub />
                  </span>
                </a>
                <a href="https://www.linkedin.com/in/ibharatbishnoi/" target="_blank">
                  <span className="bannerIcon">
                    <FaLinkedinIn />
                  </span>
                </a>
                <a href="https://www.instagram.com/ibharatbishnoi/" target="_blank">
                  <span className="bannerIcon">
                    <FaInstagram />
                  </span>
                </a>
              </div>
            </div>

            {/* Close button */}
            <span
              onClick={() => setShowMenu(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
            >
              <MdClose />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
