import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import AboutSection from "./pages/aboutSection.tsx";
import ProjectSection from "./pages/projectSection.tsx";
import ResumeSection from "./pages/resumeSection.tsx";
import ContactSection from "./pages/contactSection.tsx";
import NavbarSection from "./components/navbarSection.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
   <div className="sticky top-0 z-10">
     <NavbarSection />
   </div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/project" element={<ProjectSection />} />
        <Route path="/resume" element={<ResumeSection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
