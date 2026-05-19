import { Link } from "react-router-dom";
import { BookOpen,Clock, Star, Eye, ArrowRight } from "lucide-react";

const CoursesCard = ({ course }) => {
  const {
    _id,
    title,
    thumbnail,
    price,
    discountPrice,
    totalLessons,
    rating,
    category,
  } = course;

  const displayPrice = discountPrice || price;
  const hasDiscount = discountPrice && discountPrice < price;

  return (
    <Link to={`/courses-details/${_id}`} onClick={() => scrollTo(0,0)} className="block group">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
        {/* Image Container */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={thumbnail?.[0] || thumbnail}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Category Badge */}
          {category && (
            <span className="absolute top-3 left-3 bg-primary-dull text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg">
              {category}
            </span>
          )}
          {/* Level Badge */}
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <Eye size={16} />
              View Details
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 min-h-14 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>

          {/* Stats Row */}
          <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <BookOpen size={14} />
              <span>{totalLessons || 0} lessons</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{course.totalDuration || "N/A"}</span>
            </div>
          </div>

          {/* Rating Row */}
          {rating && (
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-0.5">
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold text-gray-700">
                  {rating}
                </span>
              </div>
              <span className="text-xs text-gray-400">
                ({course.reviewsCount?.toLocaleString() || 0} reviews)
              </span>
            </div>
          )}

          {/* Price Row */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold bg-primary bg-clip-text text-transparent">
                {displayPrice?.toLocaleString("en-GH", {
                  style: "currency",
                  currency: "GHS",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
              {hasDiscount && (
                <span className="text-sm text-gray-400 line-through">
                  {price?.toLocaleString("en-GH", {
                    style: "currency",
                    currency: "GHS",
                    minimumFractionDigits: 0,
                  })}
                </span>
              )}
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-primary-dull transition-colors duration-300">
              <ArrowRight
                size={16}
                className="text-blue-600 group-hover:text-white transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CoursesCard;
