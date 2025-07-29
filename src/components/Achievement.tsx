import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[600px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="AWS Certified Cloud Practitioner"
            subTitle="Amazon Web Services"
            result="Jul 2024 - Jul 2027"
            downloadLink="/aws-cloud.pdf"
          />
          <ResumeCard
            title="AWS Certified Solutions Architect Associate"
            subTitle="Amazon Web Services"
            result="Aug 2024 - Aug 2027"
            downloadLink="/aws-solutions.pdf"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
