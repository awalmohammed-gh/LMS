import { useMemo, useState } from "react";
import { useLearningContext } from "../context/LearningContextProvider";
import CoursesCard from "../components/card/CoursesCard";
import { Search, Filter, X, ChevronRight } from "lucide-react";

const Courses = () => {
  const { courses, search, setSearch } = useLearningContext();
  const [selectCategory, setSelectCategory] = useState("All");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const uniqueCategories = [
    "All",
    ...new Set(courses.map((course) => course.category)),
  ];

  const courseData = useMemo(() => {
    return courses.filter((course) => {
      const matchCategory =
        selectCategory === "All" || course.category === selectCategory;

      const matchSearch =
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.category.toLowerCase().includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [courses, selectCategory, search]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section - Original Logic */}
      <div className="bg-[url('/banner.jpg')] relative flex items-center w-full bg-cover bg-fixed justify-center h-[25vh] sm:h-[40vh] mb-20">
        {/* overlay */}
        <div className="absolute inset-0 backdrop-blur bg-black/60"></div>
        <div className="text-white z-10 flex items-center justify-center flex-col gap-3 text-center px-4">
          <h1 className="text-xl sm:text-3xl md:text-6xl font-bold">
            Master In Demand Tech Skills
          </h1>
          <p className="text-sm sm:text-lg font-medium max-w-3xl">
            Learn JavaScript, Python, Frontend, Backend, HTML & CSS, React,
            Node.js, and more with hands-on real-world projects.
          </p>
          <div className="inline-flex items-center gap-2 bg-blue-600 px-6 py-2 rounded-full">
            <span className="text-sm font-semibold">Current Category:</span>
            <span className="text-white font-bold">{selectCategory}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full mx-auto px-4 sm:px-[4vw] py-12 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="w-full flex items-center justify-between px-4 py-3 bg-white border cursor-pointer border-gray-200 rounded-lg shadow-sm"
            >
              <div className="flex items-center gap-2">
                <Filter size={18} className="text-gray-600" />
                <span className="font-medium text-gray-700">
                  Filter by Category
                </span>
              </div>
              <span className="text-blue-600 text-sm">
                {selectCategory !== "All" ? selectCategory : "All Categories"}
              </span>
            </button>

            {isMobileFilterOpen && (
              <div className="mt-3 p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
                <div className="flex flex-wrap gap-2">
                  {uniqueCategories.map((cat, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectCategory(cat);
                        setIsMobileFilterOpen(false);
                      }}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectCategory === cat
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Left Sidebar - Categories (Desktop) */}
          <div className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-24 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Filter size={18} className="text-blue-600" />
                Categories
              </h3>
              <div className="space-y-1">
                {uniqueCategories.map((cat, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectCategory(cat)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 flex items-center justify-between group ${
                      selectCategory === cat
                        ? "bg-blue-50 text-blue-600 font-semibold"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <span>{cat}</span>
                    {selectCategory === cat && (
                      <ChevronRight size={16} className="text-blue-600" />
                    )}
                  </button>
                ))}
              </div>

              {/* Course Count */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Showing{" "}
                  <span className="font-semibold text-gray-800">
                    {courseData.length}
                  </span>{" "}
                  of{" "}
                  <span className="font-semibold text-gray-800">
                    {courses.length}
                  </span>{" "}
                  courses
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Courses Grid */}
          <div className="flex-1">
            {/* Search and Filter Bar */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                {/* Active Filter Display */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Active filter:</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
                    {selectCategory}
                  </span>
                  {selectCategory !== "All" && (
                    <button
                      onClick={() => setSelectCategory("All")}
                      className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X size={14} className="text-gray-400" />
                    </button>
                  )}
                </div>

                {/* Search Input */}
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <Search
                      size={18}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    />
                    <input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      type="text"
                      placeholder="Search by title or category..."
                    />
                    {search && (
                      <button
                        onClick={() => setSearch("")}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      >
                        <X
                          size={16}
                          className="text-gray-400 hover:text-gray-600"
                        />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-4">
              <p className="text-sm text-gray-500">
                Found{" "}
                <span className="font-semibold text-gray-800">
                  {courseData.length}
                </span>{" "}
                courses
                {search && ` matching "${search}"`}
              </p>
            </div>

            {/* Courses Grid */}
            {courseData.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {courseData.map((course) => (
                  <CoursesCard course={course} key={course._id} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-xl border border-gray-200">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
                  <Search size={32} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No courses found
                </h3>
                <p className="text-gray-500 mb-6">
                  We couldn't find any courses matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setSearch("");
                    setSelectCategory("All");
                  }}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
