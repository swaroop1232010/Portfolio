import React from "react";
import Head from "next/head";

const Resume: React.FC = () => {
  return (
    <>
      <Head>
        <title>Resume</title>
        <meta name="description" content="View Swaroop's full stack resume." />
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div>
          <a
            href="./assets/doc/Swaroop_Resume_Fullstack.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
          >
            View My Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Resume;
