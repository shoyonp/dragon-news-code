import { FaEye, FaShareAlt, FaStar } from "react-icons/fa";

const NewsCard = (props = {}) => {
  const { news } = props || {};

  return (
    <div className="card bg-white shadow-lg rounded-lg p-4 border border-gray-200">
      {/* Author Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold">{news.author.name}</h2>
            <p className="text-sm text-gray-500">
              {news.author.published_date?.split(" ")[0]}
            </p>
          </div>
        </div>
        <FaShareAlt className="text-gray-400 cursor-pointer hover:text-gray-600" />
      </div>

      {/* Title */}
      <h2 className="mt-4 font-semibold text-lg">{news.title}</h2>

      {/* Thumbnail Image */}
      <img
        src={news.image_url}
        alt={news.title}
        className="mt-4 w-full object-cover rounded-lg"
      />

      {/* Details */}
      <p className="text-gray-700 mt-2 text-sm">
        {news.details.slice(0, 100)}...{" "}
        <span className="text-blue-500 cursor-pointer">Read More</span>
      </p>

      {/* Rating and Views */}
      <div className="flex items-center justify-between mt-4">
        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500">
          {[...Array(5)]?.map((_, i) => (
            <FaStar
              key={i}
              className={
                i < Math.round(news.rating.number)
                  ? "fill-current"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="text-gray-600 text-sm ml-2">
            {news.rating.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-600">
          <FaEye />
          <span className="text-sm">{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
