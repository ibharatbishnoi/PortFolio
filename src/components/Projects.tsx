import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectTwo } from "../assets"; // Replace with actual images if needed
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK"
            des="My Projects"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 mt-10">
          <ProjectsCard
            title="GenoCryptNet"
            des="Developed GenoCryptNet, a cutting-edge system that integrates advanced cryptographic techniques for secure data communication. Implemented embedding/extraction algorithms to hide DNA-encoded data in images. Designed a decoding and decryption pipeline to restore original plaintext from DNA sequences."
            src={projectOne}
          />

          <ProjectsCard
            title="Mental Health Chatbot"
            des="Built a Mental Health Chatbot using a fine-tuned BERT model for sequence classification. Used Hugging Face Transformers for tokenization, and implemented real-time prediction with a response mapping system. Conducted data analysis using Seaborn and Matplotlib."
            src={projectTwo}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
