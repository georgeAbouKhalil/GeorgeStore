import React from "react";

const FilterTabs = ({ categories, setSelectedCategory }) => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">Filter by Category</h2>
      <div className="flex flex-wrap space-x-4 space-y-2 sm:space-y-0">
        {categories.map((category) => (
          <button
            key={category}
            className="category-filter bg-[#1e293b] text-white px-4 py-2 rounded"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterTabs;
