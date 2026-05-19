import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useLearningContext } from "../../context/LearningContextProvider";
import CoursesCard from "../card/CoursesCard";
import { ArrowRight, Sparkles, TrendingUp, Shield, Users, BookOpen } from "lucide-react";

const Featured = () => {
  const { courses } = useLearningContext();

  const featuredData = useMemo(() => {
    if (!courses?.length) return [];

    const shuffled = [...courses].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
  }, [courses]);

  return (
    <section className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-4">
            <Sparkles size={16} />
            <span className="text-sm font-semibold">
              Handpicked Just For You
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Learn from the{" "}
            <span className="bg-primary bg-clip-text text-transparent">
              Best
            </span>
          </h2>

          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 text-lg">
              Explore a handpicked selection of top courses designed to help you
              build real-world skills. These featured courses cover in-demand
              technologies and practical knowledge to help you grow faster in
              your learning journey.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <TrendingUp size={16} className="text-green-500" />
              <span>Industry-ready skills</span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block" />
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Shield size={16} className="text-blue-500" />
              <span>Certificate of completion</span>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        {featuredData.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredData.map((course) => (
                <div key={course._id}>
                  <CoursesCard course={course} />
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <Link to="/courses">
                <button className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full inline-flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10">View All Courses</span>
                  <ArrowRight
                    size={18}
                    className="relative z-10 group-hover:translate-x-1 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
              <BookOpen size={32} className="text-gray-400" />
            </div>
            <p className="text-gray-500 text-lg">Loading featured courses...</p>
            <div className="flex justify-center gap-1 mt-4">
              <div
                className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
              />
              <div
                className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
              />
              <div
                className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Featured;
