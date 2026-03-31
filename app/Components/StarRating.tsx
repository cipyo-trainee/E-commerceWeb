"use client";

import React, { useState } from "react";

interface StarRatingProps {
  maxRating?: number; // default 5
  onChange?: (rating: number) => void; // optional callback
}

const StarRating: React.FC<StarRatingProps> = ({ maxRating = 5, onChange }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (star: number) => {
    setRating(star);
    if (onChange) onChange(star);
  };

  return (
    <div className="flex items-center gap-1">
      {[...Array(maxRating)].map((_, index) => {
        const starNumber = index + 1;

        return (
          <span
            key={starNumber}
            className={`text-yellow-400 text-xl cursor-pointer transition-transform ${
              rating >= starNumber ? "scale-110" : ""
            }`}
            onClick={() => handleClick(starNumber)}
          >
            {rating >= starNumber ? "★" : "☆"}
          </span>
        );
      })}
      <span className="text-xs text-gray-500 ml-2">
        {rating} / {maxRating}
      </span>
    </div>
  );
};

export default StarRating;
