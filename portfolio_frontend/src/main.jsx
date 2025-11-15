import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import AboutSection from './pages/about_page.jsx';
import Navbar from './components/navbar.jsx';
import Resume_section from './pages/resume_section.jsx';
import Contact_section from './pages/contact_page.jsx';
import Portfolio_section from './pages/portfolio_page.jsx';
import Footer_section from './components/footer_section.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
     <div className='sticky top-0 z-10 bg-[linear-gradient(to_right,var(--custom-a0),var(--custom-a10),var(--custom-a20),var(--custom-a30),var(--custom-a40))]'>
         <Navbar/>
       </div>
     <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutSection />} />
      <Route path="/resume" element={<Resume_section />} />
      <Route path="/portfolio" element={<Portfolio_section/>} />
      <Route path="/contact" element={<Contact_section/>} />
    </Routes>
   <div className='bg-[linear-gradient(to_right,var(--custom-a0),var(--custom-a10),var(--custom-a20),var(--custom-a30),var(--custom-a40))]'>
     <Footer_section/>
   </div>
  </BrowserRouter>,
  </StrictMode>,
)
