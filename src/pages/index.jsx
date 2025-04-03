import { Routes, Route } from 'react-router';
import About from './About';
function Pages() {
  return (
      <Routes>
        <Route path='/' element={<About />} />
      </Routes>
  );
}

export default Pages;