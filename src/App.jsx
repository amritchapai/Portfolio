import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Use HashRouter
import Main from './Components/Main';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Body from './Components/Body';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
