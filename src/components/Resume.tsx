import { useState } from "react";
import Title from "./Title";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Achievement from "./Achievement";
import { FadeIn } from "./FadeIn";

const Resume = () => {
  const [educationData, setEducationData] = useState<Boolean>(true);
  const [skillData, setSkillData] = useState<Boolean>(false);
  const [experienceData, setExperienceData] = useState<Boolean>(false);
  const [achievementData, setAchievementData] = useState<Boolean>(false);

  return (
    <section
      id="resume"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <Title title="EXPERIENCE" des="My Resume" />

          {/* Resume Download Button */}
          <a
            href="/Bharat_Resume.pdf"
            download
            className="mt-4 inline-block bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-10">
          <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <li
              onClick={() => {
                setEducationData(true);
                setSkillData(false);
                setExperienceData(false);
                setAchievementData(false);
              }}
              className={`resumeLi ${
                educationData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              }`}
            >
              Education
            </li>
            <li
              onClick={() => {
                setEducationData(false);
                setSkillData(true);
                setExperienceData(false);
                setAchievementData(false);
              }}
              className={`resumeLi ${
                skillData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              }`}
            >
              Professional Skills
            </li>
            <li
              onClick={() => {
                setEducationData(false);
                setSkillData(false);
                setExperienceData(true);
                setAchievementData(false);
              }}
              className={`resumeLi ${
                experienceData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              }`}
            >
              Experience
            </li>
            <li
              onClick={() => {
                setEducationData(false);
                setSkillData(false);
                setExperienceData(false);
                setAchievementData(true);
              }}
              className={`resumeLi ${
                achievementData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              }`}
            >
              Achievements
            </li>
          </ul>
        </div>

        <div className="mt-10">
          {educationData && <Education />}
          {skillData && <Skills />}
          {achievementData && <Achievement />}
          {experienceData && <Experience />}
        </div>
      </FadeIn>
    </section>
  );
};

export default Resume;
