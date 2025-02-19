import About from './pages/about'
import Skills from './pages/Skills'
import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react'; // <-- import the hook from our React package
import LoadingPage from './components/LoadingPage';
import { useState } from 'react';
import { useEffect } from 'react';
import Pages from './pages';
import Projects from './pages/Projects';

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
      </>
    }
    </>

  )
}

export default App
