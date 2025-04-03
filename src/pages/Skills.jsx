import React from 'react';
import { FaUserGear } from 'react-icons/fa6';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProgressBars from '../components/ProgressBars.jsx';
import InfiniteLogos from '../components/InfiniteLogos';
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  console.log("skills rendered")
  useGSAP(() => {
    gsap.utils.toArray(".icon").forEach((icon) => {
      gsap.fromTo(
        icon,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          rotation: 360,
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: icon,
            start: "top 110%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }),
    gsap.fromTo(
      ".progress",
      {width: "0%"},
      {
        width: (index, target) => target.dataset.percentage,
        duration: 3,
        scrollTrigger:{
          trigger :".progress",
          start: "top 110%",
          toggleActions: "play none none reverse"
        }
      }
    )
  }, []);
  return (
    <section id="skills" className="min-h-screen bg-[#861616] select-none">
      <div className="min-h-screen bg-slate-50 rounded-ss-[300px] px-6">
        {/* Header */}
        <div className="flex items-center gap-2 text-4xl justify-center">
          <h1 className="flex gap-4 items-center font-bold mt-[100px]">
            <FaUserGear /> Skills
          </h1>
        </div>

        {/* Skill Icons */}
        <InfiniteLogos/>
        {/* Skills bars */}
        <ProgressBars ColorClass="bg-red-600" data-percentage={95} percentage={95} labelText="HTML" />
        <ProgressBars ColorClass="bg-blue-500" data-percentage={85} percentage={85} labelText="CSS" />
        <ProgressBars ColorClass="bg-yellow-500" data-percentage={90} percentage={90} labelText="JavaScript" />
        <ProgressBars ColorClass="bg-blue-400" data-percentage={75} percentage={75} labelText="React" />
        <ProgressBars ColorClass="bg-blue-700" data-percentage={60} percentage={60} labelText="TypeScript" />
        <ProgressBars ColorClass="bg-gradient-to-r from-pink-400 to-red-500" data-percentage={50} percentage={50} labelText="UI/UX Design" />
        <ProgressBars ColorClass="bg-orange-600" data-percentage={80} percentage={80} labelText="Logo Design" />
      </div>
    </section>
  );
};

export default Skills;
