
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { sectionIds } from './SectionIds';
import { useEffect } from 'react';
import { FaBriefcase, FaCircleQuestion, FaUserGear } from "react-icons/fa6";


function SmallNav() {

    const style = {
        icon: "p-4 rounded-full hover:bg-[#f0f0f0] cursor-pointer",
    };
    const [activeLink, setActiveLink] = useState("about");
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate(); // Initialize navigate function

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const scrollToY = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: scrollToY, behavior: "smooth" });
            navigate(`#${sectionId}`, { replace: true }); // Update the URL
        }
    };

    const determineActiveSection = () => {
        for (let i = sectionIds.length - 1; i >= 0; i--) {
            const section = document.getElementById(sectionIds[i]);
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 120 && rect.bottom >= 120) {
                    if (activeLink !== sectionIds[i]) {
                        setActiveLink(sectionIds[i]);
                        navigate(`${sectionIds[i]}`, { replace: true }); // Fix navigation issue
                    }
                    break;
                }
            }
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 300);
            determineActiveSection();
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [activeLink]); // Dependency fix: Update when `activeLink` changes

  return (
    <div className="flex justify-between z-50 items-center w-72 max-md:top-10 rounded-full text-2xl fixed left-1/2 top-4 transform max-md:w-40 -translate-x-1/2 max-sm:hidden">
    <div className={`${style.icon} ${activeLink === "about" ? "active" : ""}`} onClick={() => scrollToSection("about")}>
        <Link to="/"><FaCircleQuestion /></Link>
    </div>
    <div className={`${style.icon} ${activeLink === "skills" ? "active" : ""}`} onClick={() => scrollToSection("skills")}>
        <Link to="skills"><FaUserGear /></Link>
    </div>
    <div className={`${style.icon} ${activeLink === "projects" ? "active" : ""}`} onClick={() => scrollToSection("projects")}>
        <Link to="projects"><FaBriefcase /></Link>
    </div>
    <div className="absolute top-0 right-0 left-0 bottom-0 bg-white opacity-25 blur-[2px] z-[-1] rounded-full"></div>
</div>

  )
}

export default SmallNav