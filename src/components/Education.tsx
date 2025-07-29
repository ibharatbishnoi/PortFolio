import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech in Computer Science"
            subTitle="Vellore Institute of Technology (2021-2025)"
            result="CGPA 8.78"
            des="Currently pursuing my B.Tech in Computer Science at Vellore Institute of Technology, with an expected graduation in 2025. Gaining hands-on experience in algorithms, data structures, and software engineering, I'm passionate about contributing innovative solutions to the tech industry."
          />

          <ResumeCard
            title="Higher Secondary Education"
            subTitle="Chhatrapati Shivaji Sr Sec Sch, Kota(2018-2020)"
            result=" "
            des="I completed my higher secondary education at Chhatrapati Shivaji Sr Sec Sch, laying the groundwork for my current pursuit of a B.Tech in Computer Science."
          />

          {/* Uncomment and complete if you want to include this section */}
          * <ResumeCard
            title="Secondary School Education"
            subTitle="Cambridge Public School, Jodhpur (2016 - 2018)"
            result=" "
            des="I successfully completed my secondary education at Cambridge Public School in May 2018.
            This period marked the beginning of my academic journey and laid the groundwork for my subsequent educational pursuits."
          /> *
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
