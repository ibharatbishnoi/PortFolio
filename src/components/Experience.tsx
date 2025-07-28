import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Developer Intern"
            subTitle="Capabl (from Elite Techno Groups) - (June 2023 - July 2023)"
            result="Remote"
            des="Developed a text-based Python Hangman game with features like user-input letter guessing, random word selection, and dynamic display manipulation to provide an interactive challenge. Created a fully functional Library Management System using Java that automated the entire process of book cataloging, achieving an average processing speed improvement of more than two-fold when managing transactions."
          />

          <ResumeCard
            title="Social Media Head"
            subTitle="Rajasthan Cultural Club - (June 2022 - July 2023)"
            result="Chennai, TN"
            des="Led a successful social media strategy to increase engagement and visibility for cultural events, boosting student participation. Organized and promoted multiple cultural events, enhancing cultural awareness and community involvement."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
