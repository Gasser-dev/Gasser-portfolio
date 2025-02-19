import React from 'react';

const ProjectsCards = ({projectImg}) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#861616]">
      <div className="relative w-[300px] md:w-[600px] lg:flex h-[300px] md:h-[600px] bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 shadow-lg">
        {/* Project Image */}
        <div className="w-full h-2/3 bg-gray-300 rounded-lg mb-4 flex items-center lg:w-auto justify-center">
          <img src={projectImg} alt="Photo" />
        </div>

        {/* Project Title & Description */}
        <div className="text-white text-center">
          <h2 className="text-xl md:text-2xl font-bold">Project Title</h2>
          <p className="text-sm md:text-base text-gray-300 mt-2">
            Short description of the project goes here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCards;
