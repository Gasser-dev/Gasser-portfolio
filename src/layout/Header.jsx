
import { FaCircleDown } from "react-icons/fa6";
import SmallNav from "../components/SmallNav";
import cv from "../assets/cv/CV.pdf";


const Header = () => {

    return (
        <header className="flex max-sm:justify-between justify-between p-5 pl-9 items-center">
            <div>
                <p className="text-4xl max-sm:text-lg text-white">
                    <span className="text-[#F5BF2A] max-sm:text-lg">My</span> Portfolio
                </p>
            </div>

            {/* Small Nav */}
            <SmallNav/>
            {/* Download Button */}
            <div>
                <a
                    href={cv}
                    download
                    className="font-Inter font-bold text-lg border-2 flex items-center gap-3 border-white bg-white p-2 rounded-full hover:bg-transparent hover:text-white hover:border-white max-sm:text-sm"
                >
                    Download CV <FaCircleDown className="text-[#ae0000]"/>
                </a>
            </div>
        </header>
    );
};

export default Header;
