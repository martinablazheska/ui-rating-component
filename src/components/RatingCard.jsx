import { useEffect, useState } from "react";

import greyStar from "/assets/grey_star.svg";
import goldStar from "/assets/gold_star.svg";
import vassLogo from "/assets/vass_logo.svg";

import getRating from "../utils/getRating";
import setRating from "../utils/setRating";

import classes from "./RatingCard.module.scss";

const ratings = [
  { value: 1, description: "very poor" },
  { value: 2, description: "poor" },
  { value: 3, description: "okay" },
  { value: 4, description: "very good" },
  { value: 5, description: "excellent" },
];

const RatingCard = () => {
  const [currentRating, setCurrentRating] = useState(getRating());
  const [hoveredRating, setHoveredRating] = useState(null);

  const handleRating = (value) => {
    if (value === currentRating) {
      setCurrentRating(null);
      setRating(null);
    } else {
      setCurrentRating(value);
      setRating(value);
    }
  };

  const handleMouseOver = (value) => {
    setHoveredRating(value);
  };

  const handleMouseOut = () => {
    setHoveredRating(null);
  };

  const activeRating = hoveredRating ? hoveredRating : currentRating;

  return (
    <div className={classes.card}>
      <h1>Please Rate</h1>
      <div className={classes.rating}>
        {ratings.map((rating) => (
          <div>
            <img
              key={rating.value}
              src={
                activeRating !== null
                  ? activeRating >= rating.value
                    ? goldStar
                    : greyStar
                  : greyStar
              }
              onClick={() => handleRating(rating.value)}
              onMouseOver={() => handleMouseOver(rating.value)}
              onMouseOut={handleMouseOut}
            />
            {hoveredRating === rating.value && (
              <span>{rating.description}</span>
            )}
          </div>
        ))}
      </div>
      <p>Your Feedback is Very Important To Us.</p>
      <img src={vassLogo} alt="logo" />
    </div>
  );
};

export default RatingCard;
