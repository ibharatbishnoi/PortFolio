import React from "react";
import Title from "./Title";
import { FadeIn } from "./FadeIn";
import { FaCertificate, FaDownload } from "react-icons/fa";

const Achievement = () => {
  return (
    <FadeIn>
      <div className="w-full flex flex-col gap-10">
        <Title title="ACHIEVEMENTS" des="My Certificates" />

        <div className="flex flex-col gap-6 text-left max-w-3xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg shadow shadow-shadowOne">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <FaCertificate className="text-yellow-400" />
              AWS Certified Cloud Practitioner (2024 – 2027)
            </h3>
            <p className="text-gray-400 mt-2">
              Foundational-level certification covering AWS Cloud concepts.
            </p>
            <a
              href="/aws-cloud.pdf"
              download
              className="inline-flex items-center mt-3 text-sm text-teal-400 hover:text-teal-200 transition"
            >
              <FaDownload className="mr-2" /> Download Certificate
            </a>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow shadow-shadowOne">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <FaCertificate className="text-yellow-400" />
              AWS Certified Solutions Architect – Associate (2024 – 2027)
            </h3>
            <p className="text-gray-400 mt-2">
              Certification for designing scalable and resilient AWS architectures.
            </p>
            <a
              href="/aws-solutions.pdf"
              download
              className="inline-flex items-center mt-3 text-sm text-teal-400 hover:text-teal-200 transition"
            >
              <FaDownload className="mr-2" /> Download Certificate
            </a>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default Achievement;
