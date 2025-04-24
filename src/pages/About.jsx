import Header from "../layout/Header";
import me from '@/assets/imgs/me.jpg'
import '@/index.css'
import useImagePreloader from "../components/UseImagePreloader";

const About = () => {
    const { imagesPreloaded } = useImagePreloader([me]);
    return (
        <section id="about" className="min-h-screen bg-gradient-236 from-white from-8.54 z-10 to-[#7D0000] relative to-70.28 overflow-x-hidden no-scrollbar max-h-[400px] overflow-y-auto lg:overflow-y-hidden
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <Header />
            <div className="m-4 md:m-14 w-11/12 md:w-6/12 text-white">
                <div className="typewriter">
                    <div className="text-3xl md:text-6xl">
                        <p className="font-Inter font-bold fontaty">Hello, I'm Gasser</p>
                    </div>
                </div>
                <div className="text-2xl md:text-5xl mt-1">
                    <h3 className="font-Inter font-bold fontaty">I'm Front-end Developer</h3>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center ">
                <div className="text-white text-base md:text-xl ml-3 md:ml-5 flex flex-col ">
                    <p>Hello! I’m a passionate Front-End Developer</p>
                    <p>dedicated to creating dynamic, user-friendly web applications.</p>
                    <p># I specialize in crafting responsive designs</p>
                    <p>and seamless user experiences.</p>
                    <p># With a strong eye for detail and a commitment to clean, efficient code,</p>
                    <p>I love transforming ideas into interactive digital experiences.</p>
                    <p>Whether building from scratch or improving existing projects,</p>
                    <p># my focus is always on delivering solutions</p>
                    <p>that are both visually appealing and highly functional.</p>
                    <p>✔️ Strong problem-solving and debugging skills.</p>
                    <p>✔️ Attention to detail and a keen eye for UI/UX improvements.</p>
                    <p>✔️ Effective communication and teamwork in agile environments.</p>
                    <p>✔️ Continuous learning and staying updated with the latest trends in web development.</p>
                </div>
                <div className="block rounded-full bg-[#AE0000] w-[250px] md:w-[400px] h-[250px] md:h-[400px] self-center relative">
                    {imagesPreloaded ? (
                        <img
                            src={me}
                            alt="Gasser - Front-end Developer"
                            className="absolute top-4 left-4 w-full h-full object-cover rounded-full"
                        />
                    ) : (
                        <div className="image-placeholder">Loading...</div>
                    )}
                </div>
            </div>
            <div className="absolute w-[300px] md:w-[600px] h-[300px] md:h-[600px] -left-20 md:-left-40 top-40 md:top-80 z-[-1] bg-white bg-opacity-10 backdrop-blur-md rounded-full"></div>
            <div className="absolute w-[300px] md:w-[600px] h-[300px] md:h-[600px] -bottom-36 md:-bottom-72 left-40 md:left-80 z-[-1] bg-white bg-opacity-10 backdrop-blur-md rounded-full"></div>
        </section>
    );
};

export default About;


