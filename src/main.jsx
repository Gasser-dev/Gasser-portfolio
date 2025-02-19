import { createRoot } from 'react-dom/client';

//React-router-dom
import { BrowserRouter } from 'react-router';

// CSS
import './index.css'


// App
import App from './App'

const mainRoot = createRoot(root)

mainRoot.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
)