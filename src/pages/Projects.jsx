import React from 'react'
import ProjectsCards from '../components/ProjectsCards'
import { FaBriefcase } from 'react-icons/fa6'
import aiBotBanner from '../assets/imgs/aiBotBanner.png';
import becksInsure from '../assets/imgs/becksInsure.webp';
import brandEcommerce from '../assets/imgs/brandEcommerce.webp';
import { useEffect } from 'react';
import { gsap, ScrollTrigger } from'gsap/all';

const Projects = () => {
    useEffect(() => {
  // Ensure GSAP plugins are registered
  gsap.registerPlugin(ScrollTrigger);
    
  // Create a GSAP context for cleanup
  const ctx = gsap.context(() => {
    // Wait for the next tick to ensure DOM is ready
    setTimeout(() => {
      const projectsSection = document.querySelector("#projects");
      if (!projectsSection) {
        console.warn("#projects element not found");
        return;
      }

      const cards = gsap.utils.toArray(".project-card");
      if (!cards.length) {
        console.warn("No project cards found");
        return;
      }

      // Animate title
      gsap.from("#projects h1", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#projects",
          start: "top 90%",
          toggleActions: "play none none none",
        }
      });

      // Animate cards
      cards.forEach((card, index) => {
        gsap.fromTo(card, 
          { 
            opacity: 0, 
            x: -100,
            immediateRender: false 
          },
          { 
            opacity: 1, 
            x: 0, 
            duration: 0.8,
            delay: index * 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 50%",
              end: "top 20%",
              toggleActions: "play none none none",
              
            }
          }
        );
      });
    }, 0);
  });

  return () => ctx.revert();
}, []);
  return (
    <section id='projects' className='min-h-fit gap-12 px-3 py-10 flex flex-wrap items-center flex-col bg-[#861616] relative overflow-hidden z-[1]'>
      <h1 className='text-4xl font-bold flex gap-4 text-white'><FaBriefcase />Projects</h1>
      <ProjectsCards
        projectImg={aiBotBanner}
        link="https://ai-bot1.netlify.app"
        title="AI Bot"
        language={["HTML", "CSS", "Tailwind", "TypeScript", "GSAP", "Shadcn"]}
        description="An AI chatbot application built with modern web technologies"
      />
      <ProjectsCards
        projectImg={becksInsure}
        link="https://gasser1-project1.surge.sh"
        title="Becks Insurance"
        language={["HTML", "CSS"]}
        description="A landing page responsive website for a fictional insurance company,it was My first project with css and html only"
      />
      <ProjectsCards
        projectImg={brandEcommerce}
        link="https://e-commerce-gasser-devs-projects.vercel.app"
        title="Brand E-commerce"
        language={["HTML", "CSS", "JavaScript", "React", "Redux", "React Router", "React Icons"]}
        description="A responsive e-commerce website for a fictional brand, built with modern web technologies"
      />
      <div className={`${blurDiv.blurDiv} -left-20 md:-left-40 -top-10 md:top-10`}></div>
      <div className={`${blurDiv.blurDiv} -right-20 md:-right-40 top-60 md:top-80`}></div>
      <div className={`${blurDiv.blurDiv} top-[700px] md:-bottom-72 -left-20 md:-left-40`}></div>
      <div className={`${blurDiv.blurDiv} bottom-[500px] md:-bottom-72 -right-20 md:-right-20`}></div>
      <div className={`${blurDiv.blurDiv} bottom-4 md:-bottom-72 left-50 md:left-80`}></div>
    </section>
  )
}

const blurDiv = {
  blurDiv: "absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] overflow-x-hidden overflow-y-auto md:overflow-y-hidden z-[-1]  bg-white bg-white/10 backdrop-blur-md rounded-full"
}

export default Projects