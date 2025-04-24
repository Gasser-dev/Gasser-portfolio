import About from './pages/About.jsx'
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
gsap.registerPlugin(useGSAP);
function App() {
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
    </>

  )
}

export default App
