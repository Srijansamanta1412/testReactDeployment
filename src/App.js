import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from './About';
import { About as Contact } from './Contact';
import {Services} from './Services';
import { Menu } from './Menu';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/:name" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
