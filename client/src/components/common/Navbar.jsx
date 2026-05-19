import { NavLink} from "react-router-dom";
import { useLearningContext } from "../../context/LearningContextProvider";
import { useState, useEffect, useRef } from "react";
import {
  User,
  LogOut,
  LayoutDashboard,
  Settings,
  ChevronDown,
  Menu,
  X,
  Home,
  BookOpen,
  GraduationCap,
} from "lucide-react";

const Navbar = ({onOpen}) => {
  const { isLoggedIn, setIsLoggedIn, user, setCurrentState } =
    useLearningContext();
  const [showLog, setShowLog] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLog(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        isMobileMenuOpen
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowLog(false);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { to: "/", label: "Home", icon: Home },
    { to: "/courses", label: "Courses", icon: BookOpen },
  ];


  const handleLogin = () =>{
    onOpen();
    setCurrentState("login")
  }


  const handleSignUp = () =>{
    onOpen();
    setCurrentState("signup")
  }
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm py-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 text-2xl font-bold group"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
              <GraduationCap size={18} className="text-white" />
            </div>
            <span className="text-gray-800">
              Skill<span className="text-blue-600">Forge</span>
            </span>
          </NavLink>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-600 ${
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : "text-gray-600"
                  }`
                }
              >
                <link.icon size={16} />
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Right Side - Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {isLoggedIn ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setShowLog((prev) => !prev)}
                  className="flex items-center gap-2 px-3 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 group"
                >
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <User size={14} className="text-white" />
                  </div>
                  <span className="text-sm font-medium hidden sm:inline">
                    {user?.name || "Account"}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${showLog ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown Menu */}
                {showLog && (
                  <div className="absolute right-0 mt-3 w-64 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                    {/* User Info */}
                    <div className="px-4 py-3 border-b border-gray-200 bg-blue-50">
                      <p className="text-sm font-semibold text-gray-800">
                        {user?.name || "Welcome Back!"}
                      </p>
                      <p className="text-xs text-gray-600 mt-0.5">
                        {user?.email || "student@skillforge.com"}
                      </p>
                    </div>

                    {/* Menu Items */}
                    <div className="py-2">
                      <NavLink
                        to="/educator/dashboard"
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setShowLog(false)}
                      >
                        <LayoutDashboard size={16} className="text-blue-600" />
                        Educator Dashboard
                      </NavLink>

                      <NavLink
                        to="/account"
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setShowLog(false)}
                      >
                        <Settings size={16} className="text-gray-500" />
                        My Account
                      </NavLink>

                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors w-full text-left"
                      >
                        <LogOut size={16} />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex gap-3">
                <button
                  onClick={handleLogin}
                  className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-all duration-300"
                >
                  Login
                </button>
                <button onClick={handleSignUp} className="px-5 py-2 border-2 border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden py-4 border-t border-gray-200"
          >
            {/* Mobile Navigation Links */}
            <div className="flex flex-col gap-2 mb-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`
                  }
                >
                  <link.icon size={18} />
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Mobile Auth Section */}
            <div className="border-t border-gray-200 pt-4">
              {isLoggedIn ? (
                <>
                  <div className="px-4 py-3 mb-2 bg-blue-50 rounded-lg">
                    <p className="text-sm font-semibold text-gray-800">
                      {user?.name || "Welcome Back!"}
                    </p>
                    <p className="text-xs text-gray-600 mt-0.5">
                      {user?.email || "student@skillforge.com"}
                    </p>
                  </div>
                  <NavLink
                    to="/educator/dashboard"
                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <LayoutDashboard size={18} className="text-blue-600" />
                    Educator Dashboard
                  </NavLink>
                  <NavLink
                    to="/account"
                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Settings size={18} className="text-gray-500" />
                    My Account
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-red-600 hover:bg-red-50 transition-colors w-full text-left"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex flex-col gap-3 px-4">
                  <button
                    onClick={() => setIsLoggedIn(true)}
                    className="w-full py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Login
                  </button>
                  <button className="w-full py-2.5 border-2 border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
