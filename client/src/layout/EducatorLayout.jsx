import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Educator/Navbar";
import Sidebar from "../components/Educator/Sidebar";

const EducatorLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar
        onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      {/* Sidebar */}
      <Sidebar
        isMobileOpen={isMobileMenuOpen}
        onLinkClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Content */}
      <main className="lg:ml-72 min-h-screen pt-16">
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default EducatorLayout;
