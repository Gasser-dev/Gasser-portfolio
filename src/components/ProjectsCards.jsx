import React from 'react';

const ProjectsCards = ({ projectImg }) => {
  return (
      <div className="relative flex flex-col lg:w-2/3 md:flex-row md:gap-5 md:items-center justify-between items-start bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
        {/* Project Image */}
        <div className="w-full md:w-1/2 h-48 bg-gray-300 rounded-2xl mb-4 md:mb-0 flex items-center justify-center overflow-hidden">
          <img src={projectImg} alt="Project preview" className="w-full h-full object-cover" />
        </div>

        {/* Project Title & Description & Badges*/}
        <div className="text-white md:w-2/3">
          <h2 className="text-xl md:text-2xl font-bold">Project Title</h2>
          <p className="text-sm md:text-base text-gray-300 py-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, laudantium nihil. Nemo quis non aut quae perferendis minima, id quam recusandae omnis exercitationem accusamus doloremque saepe eius provident ab ad?
          </p>
          <div className='flex flex-wrap gap-1 md:gap-2'>
            <div className={badge.badge}>HTML</div>
            <div className={badge.badge}>Tailwind</div>
            <div className={badge.badge}>JS</div>
            <div className={badge.badge}>React</div>
          </div>
          {/* Footer */}
          <div className='flex justify-center'>
            <a href='#' className='w-full transition-all mt-3 font-bold font-Inter hover:text-white hover:bg-transparent border text-center rounded-full text-[#861616] bg-white py-2 select-none cursor-pointer'>View</a>
          </div>
        </div>
      </div>
  );
};

const badge = {
  badge: "p-1 border rounded-full w-20 flex justify-center items-center"
}

export default ProjectsCards;