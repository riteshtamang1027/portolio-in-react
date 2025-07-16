import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import ContactPage from "./pages/contactPage.tsx";
import ProjectPage from "./pages/projectPage.tsx";
import ResumePage from "./pages/resumePage.tsx";
import NavBarSection from "./components/navBarSection.tsx";
import { ThemeProvider } from "./components/themeProvider.tsx";
import FooterSection from "./components/footerSection.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <StrictMode>
      <BrowserRouter>
        <div className="sticky top-0 z-10">
          <NavBarSection />
        </div>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
        <FooterSection/>
      </BrowserRouter>
    </StrictMode>
  </ThemeProvider>
);
