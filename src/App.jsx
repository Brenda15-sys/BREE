import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Blog from './Blog.jsx';
import Contact from './Contact.jsx';
import Project from './Project.jsx';
import './App.css'

function App() {
  return (
    <BrowserRouter>
        <header>
        <div className="logo-container">
          <img src="./src/tech world.jpg" alt="Logo" className="logo" />
        </div>
         <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/project">Project</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            
          </nav>
        </header>
        <main>
        <Routes>
          <Route path="/"element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
         </Routes>
        </main>
    </BrowserRouter>
  );
}

export default App;

