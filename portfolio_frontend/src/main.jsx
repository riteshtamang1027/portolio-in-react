import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import toast, { Toaster } from 'react-hot-toast';

import App from "./App.jsx";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import AboutSection from "./pages/about_page.jsx";
import Navbar from "./components/navbar.jsx";
import Resume_section from "./pages/resume_section.jsx";
import Contact_section from "./pages/contact_page.jsx";
import Portfolio_section from "./pages/portfolio_page.jsx";
import Footer_section from "./components/footer_section.jsx";
import { Theme_provider } from "./theme_provider.jsx";
import Theme_toggle from "./components/theme_toggle.jsx";
import Admin_dashboard from "./admin/admin_dashboard.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import Admin_route from "./components/adminRoute.jsx";

// Public key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

export default function Main() {
  // const location = useLocation();
  return (
    <StrictMode>
      <Theme_provider>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <BrowserRouter>
            <App_content />
          </BrowserRouter>
          ,
        </ClerkProvider>
      </Theme_provider>
    </StrictMode>
  );
}

const App_content = () => {
  const location = useLocation();
  const isAdminpage = location.pathname.startsWith("/admin");
  return (
    <>
      {/* show navbar  only  if not admin page */}
      {!isAdminpage && (
        <div className="sticky top-0 z-10 footer-gradient">
          <Navbar />
        </div>
      )}
      {/* show theme toggle  only  if not admin page */}
      {!isAdminpage && (
        <div className="fixed md:right-1/12 right-8 top-1/2 -translate-y-1/2 z-50">
          <Theme_toggle />
        </div>
      )}

      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/admin"
          element={
            <Admin_route>
              <Admin_dashboard />
            </Admin_route>
          }
        />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/resume" element={<Resume_section />} />
        <Route path="/portfolio" element={<Portfolio_section />} />
        <Route path="/contact" element={<Contact_section />} />
      </Routes>
      {/* show footer  only  if not admin page */}

      {!isAdminpage && (
        <div className="bg-gradient -mb-10">
          <Footer_section />
        </div>
      )}
       <Toaster />
    </>
  );
};

createRoot(document.getElementById("root")).render(<Main />);
