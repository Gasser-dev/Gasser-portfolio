import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-regular-svg-icons";
import { FaBriefcase, FaCircleDown, FaCircleQuestion, FaUserGear } from "react-icons/fa6";
import { Link, useHref } from "react-router";
import { useState, useEffect } from "react";
import { sectionIds } from "../components/SectionIds";

const style = {
    icon: "p-4 rounded-full hover:bg-[#f0f0f0] cursor-pointer",
};

const Header = () => {
    const [activeLink, setActiveLink] = useState("about");
    const [isScrolled, setIsScrolled] = useState(false);
    const href = useHref()

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const scrollToY = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: scrollToY, behavior: "smooth" });
        }
    };

    const determineActiveSection = () => {
        for (let i = sectionIds.length - 1; i >= 0; i--) {
            const section = document.getElementById(sectionIds[i]);
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 120 && rect.bottom >= 120) {
                    setActiveLink(sectionIds[i]);
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
    }, []);

    return (
        <header className="flex max-sm:justify-between justify-between p-5 pl-9 items-center">
            <div>
                <p className="text-4xl max-sm:text-lg text-white">
                    <span className="text-[#F5BF2A] max-sm:text-lg">My</span> Portfolio
                </p>
            </div>

            {/* Small Nav */}
            <div className="flex justify-between items-center w-72 max-md:top-10 rounded-full text-2xl fixed left-1/2 top-4 transform max-md:w-64 -translate-x-1/2 max-sm:hidden">
                <div className={`${style.icon} ${activeLink === "about" ? "active" : ""}`} onClick={() => scrollToSection("about")}>
                    <Link to="/"><FaCircleQuestion /></Link>
                </div>
                <div className={`${style.icon} ${activeLink === "skills" ? "active" : ""}`} onClick={() => scrollToSection("skills")}>
                    <Link to="skills"><FaUserGear /></Link>
                </div>
                <div className={`${style.icon} ${activeLink === "projects" ? "active" : ""}`} onClick={() => scrollToSection("projects")}>
                    <Link to="Breifcase"><FaBriefcase /></Link>
                </div>
                <div className="absolute top-0 right-0 left-0 bottom-0 bg-white opacity-25 blur-[2px] -z-10 rounded-full"></div>
            </div>

            {/* Download Button */}
            <div>
                <a
                    href="/path-to-your-cv.pdf"
                    download
                    className="font-Inter text-lg border-2 flex items-center gap-3 border-white bg-white p-2 rounded-full hover:bg-transparent hover:text-white hover:border-white max-sm:text-sm"
                >
                    Download CV <FaCircleDown className="text-[#ae0000]"/>
                </a>
            </div>
        </header>
    );
};

export default Header;
