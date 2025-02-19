import { Routes, Route } from 'react-router';
import About from './about';
function Pages() {
  return (
      <Routes>
        <Route path='/' element={<About />} />
      </Routes>
  );
}

export default Pages;