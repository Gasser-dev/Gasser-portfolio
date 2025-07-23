import Header from "../layout/Header";
import me from '@/assets/imgs/me.jpg'
import '@/index.css'
import useImagePreloader from "../components/UseImagePreloader.jsx";
import LoadingPage from "../components/LoadingPage.jsx";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const About = () => {
    const { imagesPreloaded } = useImagePreloader([me]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    },
  };
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
    <motion.div
      ref={ref}
      className="text-white text-base md:text-xl ml-3 md:ml-5 flex flex-col"
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.p variants={item}>Hello! I'm a passionate Front-End Developer</motion.p>
      <motion.p variants={item}>dedicated to creating dynamic, user-friendly web applications.</motion.p>
      <motion.p variants={item}># I specialize in crafting responsive designs</motion.p>
      <motion.p variants={item}>and seamless user experiences.</motion.p>
      <motion.p variants={item}># With a strong eye for detail and a commitment to clean, efficient code,</motion.p>
      <motion.p variants={item}>I love transforming ideas into interactive digital experiences.</motion.p>
      <motion.p variants={item}>Whether building from scratch or improving existing projects,</motion.p>
      <motion.p variants={item}># my focus is always on delivering solutions</motion.p>
      <motion.p variants={item}>that are both visually appealing and highly functional.</motion.p>
      <motion.p variants={item}>✔️ Strong problem-solving and debugging skills.</motion.p>
      <motion.p variants={item}>✔️ Attention to detail and a keen eye for UI/UX improvements.</motion.p>
      <motion.p variants={item}>✔️ Effective communication and teamwork in agile environments.</motion.p>
      <motion.p variants={item}>✔️ Continuous learning and staying updated with the latest trends in web development.</motion.p>
    </motion.div>
                <motion.div initial={{x: 200}} animate={{x: 0}} transition={{duration: 1}} className="block rounded-full bg-[#AE0000] w-[250px] md:w-[400px] h-[250px] md:h-[400px] self-center relative">

                    {imagesPreloaded ? (
                        <img
                            src={me}
                            alt="Gasser - Front-end Developer"
                            className="absolute top-4 left-4 w-full h-full object-cover rounded-full"
                        />
                    ) : (
                        <LoadingPage/>
                    )}
                </motion.div>
            </div>
            <div className="absolute w-[300px] md:w-[600px] h-[300px] md:h-[600px] -left-20 md:-left-40 top-40 md:top-80 z-[-1] bg-white bg-opacity-10 backdrop-blur-md rounded-full"></div>
            <div className="absolute w-[300px] md:w-[600px] h-[300px] md:h-[600px] -bottom-36 md:-bottom-72 left-40 md:left-80 z-[-1] bg-white bg-opacity-10 backdrop-blur-md rounded-full"></div>
        </section>
    );
};

export default About;


