import { useEffect, useState } from "react";
import { useLearningContext } from "../context/LearningContextProvider";
import {
  FileText,
  Download,
  Lock,
  Unlock,
  BookOpen,
  ChevronRight,
  FolderOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

const ResourcesPage = () => {
  const { courses, addItems } = useLearningContext();

  const [resourceData, setResourceData] = useState([]);

  useEffect(() => {
    const getData = () => {
      const saveData = [];

      for (const itemId in addItems) {
        if (addItems[itemId] > 0) {
          const findInfo = courses.find((course) => course._id === itemId);

          if (findInfo) {
            saveData.push({
              ...findInfo,
              id: itemId,
            });
          }
        }
      }

      setResourceData(saveData);
    };

    getData();
  }, [addItems, courses]);

  if (resourceData.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FolderOpen size={40} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              No Resources Yet
            </h2>
            <p className="text-gray-500 mb-6">
              You haven't purchased any courses yet. Browse our courses and
              start learning today!
            </p>
            <Link to="/courses">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Browse Courses
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-gray-800">My Resources</span>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                My Resources
              </h1>
              <p className="text-gray-500">
                Access all your course materials and downloads
              </p>
            </div>
            <div className="bg-blue-100 px-4 py-2 rounded-lg">
              <p className="text-sm text-blue-700">
                <span className="font-semibold">{resourceData.length}</span>{" "}
                Courses Enrolled
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {resourceData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Course Header */}
              <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 p-6">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen size={18} className="text-blue-600" />
                      <span className="text-sm text-gray-500">Course</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      {item.title}
                    </h2>
                    {item.instructor && (
                      <p className="text-sm text-gray-500 mt-1">
                        Instructor: {item.instructor.name}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-green-100 px-3 py-1 rounded-full">
                      <span className="text-xs font-medium text-green-700">
                        Enrolled
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resources Content */}
              <div className="p-6">
                {/* FREE FILES */}
                {item.resources?.free?.length > 0 && (
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <Unlock size={16} className="text-green-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        Free Resources
                      </h3>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                        {item.resources.free.length} files
                      </span>
                    </div>

                    <div className="space-y-3">
                      {item.resources.free.map((file, fileIndex) => (
                        <div
                          key={fileIndex}
                          className="flex items-center justify-between border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center gap-3 flex-1">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                              <FileText size={18} className="text-green-600" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-800">
                                {file.title}
                              </p>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-xs text-gray-500 uppercase bg-gray-100 px-2 py-0.5 rounded">
                                  {file.type}
                                </span>
                                <span className="text-xs text-gray-400">•</span>
                                <span className="text-xs text-gray-500">
                                  {file.size}
                                </span>
                              </div>
                            </div>
                          </div>

                          <a
                            href={file.url}
                            download
                            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium text-sm"
                          >
                            <Download size={16} />
                            Download
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* PREMIUM FILES */}
                {item.resources?.premium?.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Unlock size={16} className="text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        Premium Resources
                      </h3>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                        {item.resources.premium.length} files
                      </span>
                    </div>

                    <div className="space-y-3">
                      {item.resources.premium.map((file, fileIndex) => (
                        <div
                          key={fileIndex}
                          className="flex items-center justify-between border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center gap-3 flex-1">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <FileText size={18} className="text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-800">
                                {file.title}
                              </p>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-xs text-gray-500 uppercase bg-gray-100 px-2 py-0.5 rounded">
                                  {file.type}
                                </span>
                                <span className="text-xs text-gray-400">•</span>
                                <span className="text-xs text-gray-500">
                                  {file.size}
                                </span>
                                {file.access && (
                                  <>
                                    <span className="text-xs text-gray-400">
                                      •
                                    </span>
                                    <span className="text-xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                                      Requires Purchase
                                    </span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>

                          {file.access ? (
                            <a
                              href={file.url}
                              download
                              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                            >
                              <Download size={16} />
                              Download
                            </a>
                          ) : (
                            <div className="flex items-center gap-2 bg-gray-100 text-gray-500 px-4 py-2 rounded-lg cursor-pointer">
                              <a
                                href={file.url}
                                download
                                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                              >
                                <Download size={16} />
                                Download
                              </a>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* No Resources Message */}
                {!item.resources?.free?.length &&
                  !item.resources?.premium?.length && (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FileText size={24} className="text-gray-400" />
                      </div>
                      <p className="text-gray-500">
                        No resources available for this course yet.
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        Check back later for updates!
                      </p>
                    </div>
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
