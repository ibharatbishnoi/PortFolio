import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaReact, FaGithub, FaInstagram } from "react-icons/fa";
import { SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Cloud Practitioner.", "Full Stack Developer.", "Web Designer.", "AI & ML Enthusiast."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20 text-gray-800">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal text-gray-600">WELCOME TO MY PROFILE</h4>
        <h1 className="text-6xl font-bold">
          Hi, I'm <span className="text-blue-600 capitalize">Bharat Bishnoi</span>
        </h1>
        <h2 className="text-4xl font-bold">
          a <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#2563eb" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider text-gray-700">
          With a focus on crafting seamless web applications, I merge creativity with technical prowess.
          My passion for machine learning drives me to create intelligent systems.
          Join me on this journey through innovation, exploring projects that showcase the fusion of technology and imagination.
        </p>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 text-gray-600">
            Find me in
          </h2>
          <div className="flex gap-4 text-blue-600">
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

        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 text-gray-600">
            Best Skill On
          </h2>
          <div className="flex gap-4 text-yellow-600">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <SiCss3 />
            </span>
            <span className="bannerIcon">
              <SiHtml5 />
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
