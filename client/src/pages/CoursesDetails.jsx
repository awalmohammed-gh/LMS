import { useParams, Link, useNavigate } from "react-router-dom";
import { useLearningContext } from "../context/LearningContextProvider";
import { useEffect, useState } from "react";
import {
  Book,
  Clock,
  Star,
  Watch,
  ChevronDown,
  ChevronRight,
  CheckCircle,
  Users,
  Award,
  PlayCircle,
  FileText,
  Download,
  Tag,
  Lock,
} from "lucide-react";

const CoursesDetails = () => {
  const { courses, addToCart } = useLearningContext();

  const { id } = useParams();

  const navigate = useNavigate();

  const [courseData, setCourseData] = useState(null);

  const [openSections, setOpenSections] = useState({});

  const [openResources, setOpenResources] = useState({});

  const displayPrice = courseData?.discountPrice || courseData?.price;

  const hasDiscount =
    courseData?.discountPrice && courseData?.discountPrice < courseData?.price;

  useEffect(() => {
    if (courses && courses.length > 0) {
      const getCourseData = courses.find((course) => course._id === id);

      if (getCourseData) {
        setCourseData(getCourseData);
      }
    }
  }, [courses, id]);

  const toggleSection = (sectionId) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const toggleResource = (resourceId) => {
    setOpenResources((prev) => ({
      ...prev,
      [resourceId]: !prev[resourceId],
    }));
  };

  const handleEnroll = () => {
    addToCart(courseData._id);

    navigate(`/payment/${courseData._id}`);

    scrollTo(0, 0);
  };

  if (!courseData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
            <Book size={48} className="text-gray-400" />
          </div>

          <p className="text-gray-500 text-lg">Loading course details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Side */}
            <div className="flex-1">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <Link to="/" className="hover:text-blue-600 transition-colors">
                  Home
                </Link>

                <ChevronRight size={14} />

                <Link
                  to="/courses"
                  className="hover:text-blue-600 transition-colors"
                >
                  Courses
                </Link>

                <ChevronRight size={14} />

                <span className="text-gray-800">{courseData.title}</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {courseData.title}
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-600 mb-4">
                {courseData.shortDescription}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      className={`${
                        index < Math.floor(courseData.rating || 0)
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>

                <span className="text-sm font-semibold text-gray-800">
                  {courseData.rating}
                </span>

                <span className="text-sm text-gray-500">
                  ({courseData.reviewsCount?.toLocaleString()} reviews)
                </span>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users size={20} className="text-blue-600" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Course by</p>

                  <p className="font-semibold text-gray-800">
                    {courseData.instructor?.name || "Expert Instructor"}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                  <Watch size={16} className="text-blue-600" />

                  <span className="text-sm text-gray-700">
                    {courseData.totalDuration}
                  </span>
                </div>

                <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                  <Book size={16} className="text-blue-600" />

                  <span className="text-sm text-gray-700">
                    {courseData.totalLessons} lessons
                  </span>
                </div>

                <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                  <Users size={16} className="text-blue-600" />

                  <span className="text-sm text-gray-700">
                    {courseData.totalStudents?.toLocaleString()} students
                  </span>
                </div>
              </div>

              {/* What You'll Learn */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-500" />
                  What You'll Learn
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {courseData.whatYouWillLearn?.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle
                        size={16}
                        className="text-green-500 mt-0.5 shrink-0"
                      />

                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:w-96">
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden sticky top-24">
                {/* Thumbnail */}
                <div className="relative h-52 bg-gray-900">
                  <img
                    src={courseData.thumbnail?.[0] || courseData.thumbnail}
                    alt={courseData.title}
                    className="w-full h-full object-cover"
                  />

                  {courseData.trailerUrl && (
                    <button className="absolute inset-0 m-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <PlayCircle size={32} className="text-blue-600 ml-1" />
                    </button>
                  )}
                </div>

                <div className="p-6">
                  {/* Price */}
                  <div className="mb-5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-blue-600">
                        {displayPrice?.toLocaleString("en-GH", {
                          style: "currency",
                          currency: "GHS",
                          minimumFractionDigits: 0,
                        })}
                      </span>

                      {hasDiscount && (
                        <span className="text-sm text-gray-400 line-through">
                          {courseData.price?.toLocaleString("en-GH", {
                            style: "currency",
                            currency: "GHS",
                            minimumFractionDigits: 0,
                          })}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <Clock size={12} />5 days left at this price!
                    </p>
                  </div>

                  {/* Enroll */}
                  <button
                    onClick={handleEnroll}
                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors mb-5"
                  >
                    Enroll Now
                  </button>

                  {/* Includes */}
                  <div className="space-y-3 pt-4 border-t border-gray-200">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      This course includes:
                    </h3>

                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <PlayCircle size={16} />
                      <span>
                        {courseData.totalLessons} hours on-demand video
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Download size={16} />
                      <span>Downloadable resources</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Award size={16} />
                      <span>Certificate of completion</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Clock size={16} />
                      <span>Full lifetime access</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Locked Content Banner */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-10">
            <p className="text-sm text-blue-700">
              Enroll in this course to unlock all lessons, downloadable
              resources, and certificates.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Description */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Course Description
          </h2>

          <p className="text-gray-600 leading-relaxed">
            {courseData.description}
          </p>
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Requirements</h2>

          <ul className="space-y-2">
            {courseData.requirements?.map((req, index) => (
              <li key={index} className="flex items-start gap-2">
                <FileText size={16} className="text-blue-600 mt-0.5 shrink-0" />

                <span className="text-gray-600">{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Curriculum */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Course Curriculum
          </h2>

          <div className="space-y-3">
            {courseData.sections?.map((section, index) => (
              <div
                key={section._id || index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(section._id || index)}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100"
                >
                  <div className="flex items-center gap-3">
                    {openSections[section._id || index] ? (
                      <ChevronDown size={18} className="text-gray-600" />
                    ) : (
                      <ChevronRight size={18} className="text-gray-600" />
                    )}

                    <span className="font-semibold text-gray-800">
                      {section.title}
                    </span>
                  </div>

                  <span className="text-sm text-gray-500">
                    {section.lessons?.length || 0} lessons
                  </span>
                </button>

                {openSections[section._id || index] && (
                  <div className="divide-y divide-gray-100">
                    {section.lessons?.map((lesson, lessonIndex) => (
                      <div
                        key={lesson._id || lessonIndex}
                        className="flex items-center justify-between p-4"
                      >
                        <div className="flex items-center gap-3">
                          <PlayCircle size={16} className="text-gray-400" />

                          <div>
                            <p className="text-sm font-medium text-gray-800">
                              {lesson.title}
                            </p>

                            <p className="text-xs text-gray-500">
                              Purchase this course to access lesson
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <Clock size={12} />
                            {lesson.duration}
                          </span>

                          {lesson.isPreview ? (
                            <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
                              Preview
                            </span>
                          ) : (
                            <span className="text-xs flex items-center gap-2 bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              <Lock size={14} className="text-yellow-600" />
                              Locked
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Downloadable Resources
          </h2>

          {/* FREE RESOURCES */}
          {courseData.resources?.free?.length > 0 && (
            <div className="mb-8">
              <div className="bg-green-50 px-4 py-3 rounded-lg mb-4">
                <h3 className="font-semibold text-green-700">Free Resources</h3>
              </div>

              <div className="space-y-3">
                {courseData.resources.free.map((file, index) => (
                  <div
                    key={file.id || index}
                    className="flex items-center justify-between border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex items-center gap-3">
                      <FileText size={18} className="text-green-600" />

                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          {file.title}
                        </p>

                        <p className="text-xs text-gray-500">
                          {file.type.toUpperCase()} • {file.size}
                        </p>
                      </div>
                    </div>

                    <a
                      href={file.url}
                      download
                      className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-lg hover:bg-green-200 transition-colors"
                    >
                      Download
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PREMIUM RESOURCES */}
          {courseData.resources?.premium?.length > 0 && (
            <div>
              <div className="bg-blue-50 px-4 py-3 rounded-lg mb-4">
                <h3 className="font-semibold text-blue-700">
                  Premium Resources
                </h3>
              </div>

              <div className="space-y-3">
                {courseData.resources.premium.map((file, index) => (
                  <div
                    key={file.id || index}
                    className="flex items-center justify-between border border-gray-200 rounded-lg p-4"
                  >
                    <button onClick={() => setOpenResources(file.id || index)}>
                      <div className="flex items-center gap-3">
                        <FileText size={18} className="text-gray-500" />

                        <div>
                          <p className="text-sm font-medium text-gray-800">
                            {file.title}
                          </p>

                          <p className="text-xs text-gray-500">
                            {file.type.toUpperCase()} • {file.size}
                          </p>
                        </div>
                      </div>
                    </button>

                    {file.access ? (
                      <a
                        href={file.url}
                        download
                        className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-lg hover:bg-blue-200 transition-colors"
                      >
                        Download
                      </a>
                    ) : (
                      <span className="text-xs flex items-center gap-2 bg-gray-100 text-gray-600 px-3 py-1 rounded-lg">
                        <Lock size={14} className="text-yellow-600" />
                        Locked
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesDetails;
