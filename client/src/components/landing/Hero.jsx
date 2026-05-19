import heroImg from "../../assets/heroImg.png";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-white overflow-hidden pt-8">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Section */}
          <div className="flex-1 space-y-2 lg:space-y-3">

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
              Start Building Your{" "}
              <span className="text-blue-600">Future Today</span>
            </h1>

            {/* Subheading */}
            <h3 className="text-xl lg:text-2xl text-gray-600 font-medium">
              Learn practical tech skills with structured courses, real
              projects, and guided learning paths.
            </h3>

            {/* Description */}
            <p className="text-gray-500 leading-relaxed text-lg">
              Start learning at your own pace. Track progress, build projects,
              and grow from beginner to job-ready.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/courses">
                <button className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white text-base font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                  Start Learning
                  <ArrowRight size={18} />
                </button>
              </Link>
              <Link to="/courses">
                <button className="w-full sm:w-auto px-8 py-3 border-2 border-gray-300 text-gray-700 text-base font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
                  <Play size={18} />
                  Explore Courses
                </button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative background circle */}
              <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10"></div>

              <img
                src={heroImg}
                alt="LMS Hero - Student learning online"
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain"
              />

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-3 hidden sm:block">
                <div className="flex items-center gap-2">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
