import About from './pages/About'
import Skills from './pages/Skills'
import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react'; // <-- import the hook from our React package
import LoadingPage from './components/LoadingPage';
import { useState } from 'react';
import { useEffect } from 'react';
import Pages from './pages';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './layout/Footer';
import SmallNav from './components/SmallNav';
import Header from './layout/Header';
import { ToastContainer } from 'react-toastify';
gsap.registerPlugin(useGSAP);
function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() =>{
    setTimeout(() => {
      setIsLoading(false)
    }, 7000);
  },[])
  
  return (
    <> {
      isLoading 
      ?
      <LoadingPage/>
      :
      <>
      <About />
      <Skills />
      <Projects/>
      <Contact/>
      <Footer/>
      </>
    }
    <ToastContainer/>
    </>

  )
}

export default App
