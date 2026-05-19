import { NavLink } from "react-router-dom";
import { LayoutDashboard, BookPlus, BookOpen, Users } from "lucide-react";

const Sidebar = ({ isMobileOpen, onLinkClick }) => {
  const navLinks = [
    {
      id: 1,
      name: "Dashboard",
      path: "/educator/dashboard",
      icon: LayoutDashboard,
    },
    {
      id: 2,
      name: "Add Course",
      path: "/educator/dashboard/add-course",
      icon: BookPlus,
    },
    {
      id: 3,
      name: "My Courses",
      path: "/educator/dashboard/my-course",
      icon: BookOpen,
    },
    {
      id: 4,
      name: "Student Enrollment",
      path: "/educator/dashboard/student-enroll",
      icon: Users,
    },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
            <BookOpen size={20} className="text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">SkillForge</h2>
            <p className="text-xs text-gray-500">Educator Portal</p>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 py-6 px-4">
        <div className="space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              onClick={onLinkClick}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`
              }
            >
              <link.icon size={18} />
              <span>{link.name}</span>
              {link.name === "Student Enrollment" && (
                <span className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                  New
                </span>
              )}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="p-4 border-t border-gray-200">
        <div className="bg-blue-50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Users size={16} className="text-blue-600" />
            <h4 className="text-sm font-semibold text-gray-800">Need Help?</h4>
          </div>
          <p className="text-xs text-gray-600 mb-3">
            Check out our educator guides and tutorials
          </p>
          <button className="w-full py-2 bg-white text-blue-600 text-xs font-medium rounded-lg hover:bg-gray-50 transition-colors">
            View Documentation
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 bg-white border-r border-gray-200 fixed left-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      {isMobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onLinkClick}
          />
          {/* Sidebar */}
          <aside className="fixed left-0 top-0 w-72 h-full bg-white z-50 shadow-xl lg:hidden animate-slideIn">
            <SidebarContent />
          </aside>
        </>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Sidebar;
