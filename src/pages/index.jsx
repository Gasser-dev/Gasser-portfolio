import { Routes, Route } from 'react-router';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import { Suspense } from 'react';
import LoadingPage from '../components/LoadingPage';
function Pages() {
  return (
    <Suspense fallback={<LoadingPage/>}>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects />} />
        <Route path='/contactMe' element={<Contact />} />
      </Routes>
      </Suspense>
  );
}

export default Pages;