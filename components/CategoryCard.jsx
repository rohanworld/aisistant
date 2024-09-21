import React from 'react';

const CategoryCard = ({ title, description, badge, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-102 hover:shadow-2xl w-auto h-auto mx-auto cursor-pointer flex flex-col justify-between">
      {/* Image Section */}
      <div className="relative h-2/3 border border-gray-200 shadow-md m m-2 rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {badge && (
          <span className="absolute top-2 right-2 bg-orange-100 text-orange-600 px-2 py-1 text-sm rounded-full">
            {badge}
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
