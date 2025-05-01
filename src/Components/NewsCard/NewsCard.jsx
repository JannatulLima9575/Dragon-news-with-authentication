import React from "react";
import { FaRegBookmark, FaShareAlt, FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    image_url,
    details,
    total_view,
    rating,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md mb-6">
      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-t-md">
        <div className="flex items-center gap-3">
          <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">{new Date(author.published_date).toLocaleDateString()}</p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500 text-xl">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <img src={image_url} alt={title} className="w-full h-64 object-cover rounded-md mb-4" />
        <p className="text-sm text-gray-700">
          {details.length > 200 ? `${details.slice(0, 200)}...` : details}
          <span className="text-orange-500 font-semibold ml-1 cursor-pointer">Read More</span>
        </p>
      </div>

      <div className="flex justify-between items-center px-4 py-2 border-t text-sm text-gray-600">
        <div className="flex items-center gap-2 text-orange-400">
          {Array.from({ length: rating.number }, (_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-black font-medium ml-1">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye /> {total_view}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;